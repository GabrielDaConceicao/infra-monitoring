resource "aws_s3_bucket" "site_bucket" {
bucket = "${var.project_name}site-${random_string.rand_id.result}"
}
resource "random_string" "rand_id" {
length = 6
special = false
upper = false
}
# Bloquear acesso público direto
resource "aws_s3_bucket_public_access_block" "block" {
bucket = aws_s3_bucket.site_bucket.id
block_public_acls = true
block_public_policy = true
ignore_public_acls = true
restrict_public_buckets = true
}
# Habilitar versionamento opcional
resource "aws_s3_bucket_versioning" "versioning" {
bucket = aws_s3_bucket.site_bucket.id
versioning_configuration { status = "Enabled" }
}
# CloudFront + OAC
resource "aws_cloudfront_origin_access_control" "oac" {
name = "${var.project_name}-oac"
description = "OAC for S3 private bucket"
origin_access_control_origin_type = "s3"
signing_behavior = "always"
signing_protocol = "sigv4"
}
resource "aws_cloudfront_distribution" "site" {
enabled = true
default_root_object = "index.html"
origin {
domain_name = aws_s3_bucket.site_bucket.bucket_regional_domain_name
origin_id = "s3-origin"
origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
}

default_cache_behavior {
allowed_methods = ["GET", "HEAD"]
cached_methods = ["GET", "HEAD"]
target_origin_id = "s3-origin"
viewer_protocol_policy = "redirect-to-https"
compress = true
forwarded_values {
  query_string = false

  cookies {
    forward = "none"
  }
}
}
restrictions {
  geo_restriction {
    restriction_type = "none"
  }
}
viewer_certificate { cloudfront_default_certificate = true }
}
# Policy para permitir acesso do CloudFront ao bucket
data "aws_iam_policy_document" "bucket_policy" {
statement {
sid = "AllowCloudFrontServicePrincipalRead"
actions = ["s3:GetObject"]
resources = [
"${aws_s3_bucket.site_bucket.arn}/*"
]
principals {
type = "Service"
identifiers = ["cloudfront.amazonaws.com"]
}
condition {
test = "StringEquals"
variable = "AWS:SourceArn"
values = [aws_cloudfront_distribution.site.arn]
}
}
}
resource "aws_s3_bucket_policy" "allow_cf" {
bucket = aws_s3_bucket.site_bucket.id
policy = data.aws_iam_policy_document.bucket_policy.json
}
