# ImageGalery

## 1. Ambiente de desenvolvimento

### 1.1. Preparação
Para evitar conflitos entre os ambientes dos desenvolvedores, o projeto já possui containers com as dependências e configurações necessárias, bastando apenas que o desenvolvedor possua os seguintes softwares instalados localmente:

Node.js (versão 16.15.0 ou superior) e NPM (versão 8.5.5 ou superior)

Docker

Docker Compose

Git Large File Storage

Tendo todas as dependências instaladas, será necessário executar o comando abaixo antes de subir a aplicação pela primeira vez:

npm install

Para executar o projeto localmente sem o Docker (necessário node 18.13.0 e Angular CLI 15.1.4)
basta executar o seguinte comando: ng serve

### 1.2. Comandos disponíveis
Abaixo estão listados os principais comandos para execução e finalização dos containers.

### 1.2.1. Iniciar a aplicação
Após finalizar a configuração do ambiente é possível iniciar a aplicação com o comando:

docker-compose up

### 1.2.2. Finalizar a aplicação

docker-compose down


