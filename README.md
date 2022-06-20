# TEMPLATE-BACK

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

# SETUP
### Conexão com banco de dados - PG

> Para executar a conexão com banco de dados necessário termos um arquivo ```.env``` contendo nossas variáveis de ambiente. Para isso o arquivo ```.env.example``` pode ser renomeado para ```.env``` que já contem a seguinte estrutura. Com dados padrões para uso.

```
DB_USER=admin
DB_HOST=db-horus
DB_NAME=horus
DB_PASS=123456
DB_PORT=5432
```
### PORT
> Sete a variável de ambiente responsável pela porta. ```PORT_SERVER```
### CORS
> Caso necessário liberar alguma porta ou projeto para acessar a API deve ser ajustado a variável ```APPLICATION_DOMAIN``` setando quem esta permitido a acessar a API.
### SWAGGER
> Para o swagger, pode ser declarado caso necessário as variaveis de host e port se o projeto ficar abaixo de algum gateway. ```HOST_SERVER``` e ```PORT_GATEWAY```
# GIT
> Para nosso controle de commits temos o Husky nos projetos combinado com eslint e commitlint.
> Caso identificar qualquer problema, favor nos relatar!
# DOCKER
> Caso deseje rodar a API via Docker ele pode ser buildado em formado de `dev` ou `production` para isso adicione o `--build-arg` no momento do build conforme o script abaixo:
```
docker build -t api-PROJETO:v1.0.0 --build-arg NODE_ENV=dev .
```
> Motivo de setar esse argumento no momento do build é para a imagem saber se deve ou não instalar algumas dependencias de desenvolvimento como o `Swagger`, pois sem ele não é possível visualizarmos a documentação.
# RUN
> Para rodar local basta o comando `npm run dev` ou `yarn dev`.
### Testes 

> Para testar a API basta acessar a documentação no SWAGGER exposta na seguinte URL:

* <https://localhost:8000/v1/docs/>
