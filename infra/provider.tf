terraform {
  required_providers {
    aws = {
      version = "~> 6.71.0"
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  profile = "default"
  region  = "us-east-2"
}