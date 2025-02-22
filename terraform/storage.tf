module "app_s3_bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "4.5.0"

  bucket           = var.app_s3_bucket_name
  object_ownership = "BucketOwnerEnforced"

  tags = merge(local.common_tags, {
    Group = "Storage"
  })

  force_destroy = true
}

data "aws_iam_policy_document" "s3_access" {
  version = "2012-10-17"

  statement {
    actions   = ["s3:GetObject"]
    resources = ["${module.app_s3_bucket.s3_bucket_arn}/*"]

    principals {
      type        = "AWS"
      identifiers = module.app_cdn.cloudfront_origin_access_identity_iam_arns
    }
  }
}

resource "aws_s3_bucket_policy" "cloudfront_access" {
  bucket = module.app_s3_bucket.s3_bucket_id
  policy = data.aws_iam_policy_document.s3_access.json
}