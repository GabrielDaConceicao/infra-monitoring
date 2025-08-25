resource "aws_security_group" "monitor_sg" {
  name        = "monitor_sg"
  description = "Security group for monitoring EC2"


  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

   ingress {
    from_port   = 9090
    to_port     = 9090
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

   egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
    }
}


data "aws_vpc" "default" { default = true }


data "aws_ami" "al2023" {
most_recent = true
owners = ["137112412989"] # Amazon
filter {
name = "name"
values = ["al2023-ami-*-x86_64"]
}
}


resource "aws_instance" "monitor" {
ami = data.aws_ami.al2023.id
instance_type = "t3.micro"
key_name = var.ec2_key_name
vpc_security_group_ids = [aws_security_group.monitor_sg.id]
associate_public_ip_address = true
tags = { Name = "${var.project_name}-monitor" }


user_data = <<-EOF
#!/bin/bash
dnf update -y
dnf install -y docker git
systemctl enable docker
systemctl start docker
# docker compose plugin
dnf install -y docker-compose-plugin
EOF
}