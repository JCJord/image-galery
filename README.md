# ImageGalery

## 1. Ambiente de desenvolvimento

## Execução sem o Docker
Para executar o projeto localmente sem o Docker (necessário node 18.13.0 e Angular CLI 15.1.4)
Será necessário executar o comando abaixo antes de subir a aplicação pela primeira vez:
npm install
após instalar as dependências basta executar o seguinte comando: ng serve.

### 1.1. Preparação
Para evitar conflitos entre os ambientes, o projeto já possui containers com as dependências e configurações necessárias, bastando apenas que o desenvolvedor possua os seguintes softwares instalados localmente:

Docker

Docker Compose

NPM

### 1.2. Comandos disponíveis
Abaixo estão listados os principais comandos para execução e finalização dos containers.

### 1.2.1. Iniciar a aplicação
Após finalizar a configuração do ambiente é possível iniciar a aplicação com o comando:

docker-compose up

### 1.2.2. Finalizar a aplicação

docker-compose down


