resource "aws_ecr_repository" "repo" {
  name                 = "meu.portifolio"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "AES256"
  }
}

# Permissão para que a role do GitHub (assumida via OIDC) consiga acessar o ECR
data "aws_caller_identity" "current" {}

resource "aws_ecr_repository_policy" "repo_policy" {
  repository = aws_ecr_repository.repo.name

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPushPullFromGithubOIDC",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::905418427814:role/GitHubActions-ECR2-Push"
      },
      "Action": [
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:BatchCheckLayerAvailability",
        "ecr:PutImage",
        "ecr:InitiateLayerUpload",
        "ecr:UploadLayerPart",
        "ecr:CompleteLayerUpload"
      ]
    }
  ]
}
EOF
}

