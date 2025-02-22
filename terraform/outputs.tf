output "app_cloudfront_distribution_id" {
  description = "The distribution ID of the deployed app Cloudfront resource"
  value       = module.app_cdn.cloudfront_distribution_id
}