locals {
  application_name = var.application_name
  unique_name      = "${var.application_name}-${var.environment}-${random_string.suffix.result}"
}