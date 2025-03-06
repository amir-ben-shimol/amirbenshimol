terraform {
  # Required: "region", "bucket", "dynamodb_table" - will be configured in GitHub action secrets
  backend "s3" {
    key     = "terraform-amirbenshimol-website.tfstate"
    encrypt = true
  }
}
