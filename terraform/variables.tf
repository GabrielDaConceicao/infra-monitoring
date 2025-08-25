variable "project_name" { 
    type = string 
    default = "static-site-demo" 
}
variable "region" { 
    type = string 
    default = "us-east-1" 
}
variable "ec2_key_name" { 
    type = string 
    description = "Nome do key pair para SSH" 
}
variable "allow_cidr" { 
    type = string 
    default = "0.0.0.0/0" 
}
