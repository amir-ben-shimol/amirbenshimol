# ! CloudFront supports US East (N. Virginia) region only for the certificate
provider "aws" {
  alias  = "cloudfront_certificates_region"
  region = "us-east-1"
}

module "acm_cloudfront" {
  source  = "terraform-aws-modules/acm/aws"
  version = "5.1.1"

  providers = {
    aws = aws.cloudfront_certificates_region
  }

  domain_name         = data.aws_route53_zone.app.name
  zone_id             = data.aws_route53_zone.app.id
  wait_for_validation = true
  validation_method   = "DNS"

  tags = merge(
    local.common_tags,
    {
      Group = "Certificate"
    }
  )
}