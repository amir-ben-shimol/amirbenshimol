data "aws_eks_cluster" "amir-ben-shimol-website" {
  name = "amir-ben-shimol-website"
}

data "aws_eks_cluster_auth" "amir-ben-shimol-website" {
  name = data.aws_eks_cluster.website.name
}

data "aws_iam_openid_connect_provider" "amir-ben-shimol-website" {
  url = data.aws_eks_cluster.website.identity[0].oidc[0].issuer
}

data "aws_region" "current" {}

data "aws_ecr_repository" "amir-ben-shimol-website" {
  name = var.website_ecr_repository
}
