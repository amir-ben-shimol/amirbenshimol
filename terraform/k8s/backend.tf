terraform {
  # Required: "region", "bucket", "dynamodb_table" - will be configured in GitHub action
  backend "s3" {
    key     = "terraform-amirbenshimol-website.k8s.tfstate"
    encrypt = true
  }
}
