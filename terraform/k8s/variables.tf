variable "project" {
  description = "Name to be used on all the resources as identifier. e.g. Project name, Application name"
  type        = string
}

variable "common_tags" {
  description = "A map of common tags to add to all resources"
  type        = map(string)
  default = {
    "Project"     = "TerraformAmirBenShimolWebsite"
    "Environment" = "Production"
    "Owner"       = "Amir Ben Shimol"
  }
}

variable "website_ecr_repository" {
  description = "Repository name in ECR for of the website"
  type        = string
}

variable "website_host" {
  description = "The website host"
  type        = string
}

variable "website_docker_image_tag" {
  description = "The Docker image tag of the website build artifact"
}
