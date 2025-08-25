output "cloudfront_domain" { value = aws_cloudfront_distribution.site.domain_name }
output "bucket_name" { value = aws_s3_bucket.site_bucket.id }
output "ec2_public_ip" { value = aws_instance.monitor.public_ip }
