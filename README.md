# show-code-interview

This is a project for show how I code. In this case I build and API Rest using Spring boot and and simple web application using Angular

## Requirements

For building and running the application you need:

- [JDK 13](https://www.oracle.com/java/technologies/javase-jdk13-downloads.html)
- [Maven](https://maven.apache.org)
- [Node](https://nodejs.org/en/)
- [PostgresSql] (https://www.postgresql.org/)

## Get started

### Clone the repo

```shell
git clone https://github.com/TalitaCng/show-code-pokemon.git
```

### SERVER CONFIG: 
There's so many ways to run an Spring Boot application, here I will suggest you to run it locally. So execute the `main` method in the `com.talitacassanego.restapi.RestApiApplication` class from your IDE.

```shell
mvn spring-boot:run
```
The `mvn spring-boot:run` command start the spring boot application and runs on port `8080`.



### CLIENT CONFIG: 
Go to client folder (`client/crud-fontend`) and then install the `npm` packages described in the `package.json` and verify that it works:
```shell
npm install
npm start
```
The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs on port `4200`.
