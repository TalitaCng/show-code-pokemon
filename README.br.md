# show-code-interview

Esse é um projeto para mostrar como eu codifico, quais são as boas práticas e linguagens que eu tenho mais habilidade. 
Nesse projeto eu criei uma API Rest usando spring boot e uma aplicação web usando Angular. Nessa aplicação web além da minha API feita em spring eu utilizei também  a API https://pokeapi.co/

## Pré requisitos

Para rodar a aplicação você precisa de:

- [JDK 13](https://www.oracle.com/java/technologies/javase-jdk13-downloads.html)
- [Maven](https://maven.apache.org)
- [Node](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)

## Iniciar

### Clone o projeto

```shell
git clone https://github.com/TalitaCng/show-code-pokemon.git
```

### Configuração do server: 
Execute a classe `main` que esta no método `com.talitacassanego.restapi.RestApiApplication` class para sua IDE.

```shell
mvn spring-boot:run
```
O comando `mvn spring-boot:run` irá startar a aplicação spring boot application e irá rodar na porta `8080`. Então você pode acessar a aplicação executando 
`http://localhost:8080`.
Depois que a aplicação estiver rodando você pode acessar a Documentação da API atraves do link `http://localhost:8080/swagger-ui.html#/`

IMPORTANTE: A aplicação esta esperando que você tenha um bando de dados `postgres` rodando localmente então você pode configurar (port, login and password) no arquivo `application.properties` file (~/server/restapi/src/main/resources/application.properties).
Nesse arquivo você encontrará um exemplo de configuração, altere para suas credenciais e execute o projeto. 
Você não precisa rodar nenhum script sql, apenas criar o server e uma base de dados vazia. Quando você rodar a aplicação spring boot as tabelas serão criadas automaticamente. 


### Configuração client: 
Vá a pasta do client (`client/crud-fontend`) e instale os pacotes npm que estao descritos no arquivo `package.json` então verifique se funcionou rodando os comandos abaixo:

```shell
npm install
npm start
```
O `npm start` é o comando que builda (compila TypeScript e copia assets ) da aplicação dentro da pasta `/dist`, olhando para as alterações dos arquivos e rodando na porta `4200`;. Então você pode acessar usando o seguinte link no seu navegador `http://localhost:4200` 
