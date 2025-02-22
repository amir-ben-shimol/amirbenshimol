# The domain was registered in AWS, which automatically generates hosted zone (thus cannot be generated via Terraform)
data "aws_route53_zone" "app" {
  name = local.app_domain_name
}

resource "aws_route53_record" "cdn" {
  zone_id = data.aws_route53_zone.app.zone_id
  name    = local.app_domain_name
  type    = "A"

  alias {
    name                   = module.app_cdn.cloudfront_distribution_domain_name
    zone_id                = module.app_cdn.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = true
  }
}

# * --- Resources to redirects www to non-www domains for application ---
resource "aws_s3_bucket" "redirect_www" {
  bucket = "www.${local.app_domain_name}"

  tags = merge(local.common_tags, {
    Group = "Routing"
  })
}

resource "aws_s3_bucket_website_configuration" "redirect_www" {
  bucket = aws_s3_bucket.redirect_www.bucket

  redirect_all_requests_to {
    host_name = local.app_domain_name
    protocol  = "https"
  }
}

resource "aws_route53_record" "redirect_www" {
  zone_id = data.aws_route53_zone.app.zone_id
  name    = "www.${local.app_domain_name}"
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.redirect_www.website_domain
    zone_id                = aws_s3_bucket.redirect_www.hosted_zone_id
    evaluate_target_health = true
  }
}
# * ---
