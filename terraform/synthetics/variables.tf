variable "grafana_service_token" {
  description = "Grafana service token"
  type        = string
  sensitive   = true
}

variable "sm_access_token" {
  description = "Synthetic Monitoring access token test"
  type        = string
  sensitive   = true
}
