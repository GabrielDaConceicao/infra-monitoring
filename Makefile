PROJECT?=meu-portifolio
REGION?=us-east-2
BUCKET?=
.PHONY: tf-init tf-apply tf-destroy s3-sync ansible
tf-init:
	cd terraform && terraform init
tf-apply:
	cd terraform && terraform apply -auto-approve -var="project_name=$(project_name)"
	(PROJECT)" -var="region=$(REGION)" -var="ec2_key_name=$$EC2_KEY_NAME"
tf-destroy:
	cd terraform && terraform destroy -auto-approve -var="project_name=$
	(PROJECT)" -var="region=$(REGION)" -var="ec2_key_name=$$EC2_KEY_NAME"
s3-sync:
	@[ -n "$(BUCKET)" ] || (echo "Defina BUCKET=nome-do-bucket" && exit 1)
aws s3 sync ./public s3://$(BUCKET)/ --delete
ansible:
	cd ansible && ansible-playbook -i inventory.ini playbook.yml
