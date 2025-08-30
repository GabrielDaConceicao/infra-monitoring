# 🚀 Projeto DevOps - Infraestrutura, Deploy e Monitoramento na AWS  

Este projeto implementa um fluxo completo de **DevOps**, integrando práticas de **Infraestrutura como Código (IaC)**, **automação de configuração**, **deploy contínuo** e **observabilidade** em um ambiente provisionado na **AWS**.  

---

## 📌 Arquitetura Geral  

---

## 🔧 Stack Utilizada  

- **Terraform (IaC):**  
  - Provisionamento de instâncias **EC2** dedicadas ao monitoramento  
  - Repositório **ECR** para armazenar imagens da aplicação  
  - **S3 + CloudFront** para servir conteúdo estático com alta disponibilidade  
  - Separação de responsabilidades e reutilização de módulos, seguindo boas práticas de IaC  

- **Ansible:**  
  - Playbook automatizado para instalação do **Docker, Node Exporter, Prometheus**  
  - Configuração de serviços via **systemd**  
  - Deploy de containers com **Docker Compose**  

- **CI/CD (GitHub Actions):**  
  - Workflow para build e deploy contínuo da aplicação web  
  - Integração com Docker + AWS  

- **Observabilidade (Prometheus + Grafana):**  
  - Monitoramento de CPU, memória, disco e uptime com **Node Exporter**  
  - Dashboards no **Grafana** já provisionados via Ansible  



## 1️⃣ Clonar o repositório  
- git clone git@github.com:GabrielDaConceicao/infra-monitoring.git
- cd infra-monitoring

## 2️⃣ Terraform:

- aws configure: 
  para permissão da criação da infraestrutura
- cd terraform
- terraform init
- terraform plan
- terraform apply

---

## 3️⃣ Configuração de servidores com Ansible

- Ajuste o arquivo hosts com o IP público da sua instância EC2 no inventory.ini.

- Exemplo de arquivo hosts:

- [monitoring] ip da vm ansible_user=ec2-user ansible_ssh_private_key_file=/caminho/para/chave/key
