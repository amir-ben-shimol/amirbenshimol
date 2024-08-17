resource "kubernetes_deployment_v1" "website" {
  metadata {
    name      = "website-deployment"
    namespace = "default"

    labels = {
      app = "website"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "website"
      }
    }

    template {
      metadata {
        labels = {
          app = "website"
        }
      }

      spec {
        container {
          image             = "${data.aws_ecr_repository.website.repository_url}:${var.website_docker_image_tag}"
          name              = "website"
          image_pull_policy = "Always"

          liveness_probe {
            http_get {
              path = "/"
              port = 80
            }

            period_seconds        = 5
            initial_delay_seconds = 10
          }

          port {
            container_port = 80
            name           = "website"
          }

          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }
        }
      }
    }
  }
}

