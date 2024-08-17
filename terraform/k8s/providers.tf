# Required environment variables: "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"
provider "aws" {}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.website.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.website.certificate_authority.0.data)
  token                  = data.aws_eks_cluster_auth.website.token
}

provider "helm" {
  kubernetes {
    host                   = data.aws_eks_cluster.website.endpoint
    cluster_ca_certificate = base64decode(data.aws_eks_cluster.website.certificate_authority.0.data)
    token                  = data.aws_eks_cluster_auth.website.token
  }
}
