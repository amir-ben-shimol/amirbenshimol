module "eks_cluster_website" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.21.0"

  cluster_name                   = "website"
  cluster_version                = "1.30"
  subnet_ids                     = module.vpc_website.private_subnets
  vpc_id                         = module.vpc_website.vpc_id
  cluster_endpoint_public_access = true
  create_cloudwatch_log_group    = false

  eks_managed_node_groups = {
    first = {
      desired_capacity = 1
      max_capacity     = 2
      min_capacity     = 0

      instance_type = "t3.small"
      capacity_type = "ON_DEMAND"
      disk_size     = 20
      ami_type      = "AL2_x86_64"
    }
  }

  tags = merge(
    var.common_tags,
    {
      Name = "website",
    }
  )
}

module "eks_cluster_kubeconfig_website" {
  source  = "hyperbadger/eks-kubeconfig/aws"
  version = "2.0.0"

  cluster_name = module.eks_cluster_website.cluster_name
  depends_on   = [module.eks_cluster_website]
}
