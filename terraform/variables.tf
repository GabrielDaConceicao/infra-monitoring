variable "project_name" { 
    type = string 
    default = "meu.portfolio" 
}
variable "region" { 
    type = string 
    default = "us-east-2" 
}
variable "ec2_key_name" { 
    type = string 
    description = "awskey" 
}
variable "allow_cidr" { 
    type = string 
    default = "0.0.0.0/0" 
}
