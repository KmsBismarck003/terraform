variable "length" {
  description = "length of the random string"
  type        = number
  default     = 10
}

variable "application_name" {
  description = "Name of the application"
  type        = string
  default     = "myapp"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "enable_monitoring" {
  description = "Habilitar o deshabilitar el monitoreo"
  type        = bool
  default     = true
}

variable "regions" {
  description = "Lista de regiones donde se desplegara la infraestructura"
  type        = list(string)
  default     = ["us-east-1", "us-west-2"]
}

variable "environment_tags" {
  description = "Etiquetas especificas para cada entorno"
  type        = map(string)
  default = {
    "dev"  = "Desarrollo"
    "prod" = "Produccion"
  }
}

variable "application_config" {
  description = "Configuracion especifica de la aplicacion"
  type = object({
    version      = string
    maintainer   = string
    dependencies = list(string)
  })
  default = {
    version      = "1.0.0"
    maintainer   = "John Doe"
    dependencies = ["dependency1", "dependency2"]
  }
}

variable "allowed_networks" {
  description = "Lista de redes permitidas para acceder a la aplicacion"
  type        = set(string)
  default     = ["10.0.0.0/16", "192.168.1.0/24"]
}