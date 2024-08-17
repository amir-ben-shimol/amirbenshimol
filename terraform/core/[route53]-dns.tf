# The domain was registered in AWS, which automatically generates hosted zone (thus cannot be generated via Terraform)
data "aws_route53_zone" "website" {
  name = var.website_domain_name
}
