output "eks_cluster_kubeconfig" {
  description = "EKS Kubeconfig content of the website"
  value       = module.eks_cluster_kubeconfig_website.kubeconfig
  sensitive   = true
}
