# show-code-interview

This is a project for show how I code. In this case I build and API Rest using Spring boot and and simple web application using Angular

## Requirements

For building and running the application you need:

- [JDK 13](https://www.oracle.com/java/technologies/javase-jdk13-downloads.html)
- [Maven](https://maven.apache.org)
- [Node](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)

## Get started

### Clone the repo

```shell
git clone https://github.com/TalitaCng/show-code-pokemon.git
```

### Server Config: 
There's so many ways to run an Spring Boot application, here I will suggest you to run it locally. So execute the `main` method in the `com.talitacassanego.restapi.RestApiApplication` class from your IDE.

```shell
mvn spring-boot:run
```
The `mvn spring-boot:run` command start the spring boot application and runs on port `8080` So you can access the application using `http://localhost:8080`.
After that you application is running you can access the API Documentation: `http://localhost:8080/swagger-ui.html#/`

IMPORTANT: The server application is expected that you have a local `postgres database` so you can configure the database ports, login and password at the `application.properties` (~/server/restapi/src/main/resources/application.properties) in this file you will find an example of configuration.
*You don't need to run any sql script, just create and server and an empty database. When you run the spring application the tables will be create automatically.


### Client Config: 
Go to client folder (`client/crud-fontend`) and then install the `npm` packages described in the `package.json` and verify that it works:
```shell
npm install
npm start
```
The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs on port `4200`. So you can access `http://localhost:4200`
