resource "aws_ecr_repository" "website" {
  name                 = var.website_ecr_repository
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  encryption_configuration {
    encryption_type = "KMS"
  }

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project}-ECR-Repository-Website",
    }
  )
}
