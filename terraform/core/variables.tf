variable "vpc_cidr" {
  description = "The CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones_count" {
  description = "The number of AZs in the VPC"
  type        = number
  default     = 2
}

variable "subnet_cidr_bits" {
  description = "The number of subnet bits for the CIDR. For example, specifying a value 8 for this parameter will create a CIDR with a mask of /24"
  type        = number
  default     = 8
}

variable "project" {
  description = "Name to be used on all the resources as identifier. e.g. Project name, Application name"
  type        = string
}

variable "website_domain_name" {
  description = "Domain name of application"
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
  description = "Repository name in ECR for backend"
  type        = string
}
