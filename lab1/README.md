# Lab 1: Introducción a Terraform y Provider Random

Este laboratorio demuestra la configuración básica de Terraform, la especificación de proveedores (providers) y la creación de un recurso local utilizando el proveedor `hashicorp/random`.

## 📋 Estructura del laboratorio

```text
lab1/
├── main.tf              # Configuración principal de Terraform y recursos
├── .terraform.lock.hcl  # Archivo de bloqueo de versiones de dependencias de Terraform
└── README.md            # Documentación del laboratorio
```

## 🛠️ Requisitos Previos

- [Terraform](https://www.terraform.io/downloads) (versión >= 1.0.0)

## 🚀 Recursos Definidos

- **`random_string.suffix`**: Genera una cadena aleatoria de 16 caracteres incluyendo letras, números y caracteres especiales.

## 💻 Instrucciones de Uso

1. **Inicializar Terraform**:
   Descarga e instala los proveedores requeridos descritos en `main.tf`:
   ```bash
   terraform init
   ```

2. **Generar Plan de Ejecución**:
   Visualizar los cambios que Terraform realizará antes de aplicar:
   ```bash
   terraform plan
   ```

3. **Aplicar la Configuración**:
   Crear los recursos definidos en la infraestructura:
   ```bash
   terraform apply
   ```

4. **Verificar Estado y Recursos**:
   Inspeccionar los recursos creados en el estado local:
   ```bash
   terraform show
   ```
