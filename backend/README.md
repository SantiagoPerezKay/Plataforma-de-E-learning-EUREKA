# Backend project for edtech app "Eureka"

## Technologies

- Spring Framework
- Java 17
- Maven
- PostgreSQL

## Requirements
- JDK 17 installed
- PostgreSQL DataBase configured
- Git

## Setup
- clone the repository:
```bash
git clone https://github.com/No-Country/s14-11-m-java.git
```

- Move to the backend folder

> If you are using IntelliJ, you can load the enviroment variables with "envFile" plugin and creating a .env file using .env.example as a reference.

> Otherwise, you can modify the application.properties file in `backend/src/main/resource`, replacing \${DB_USER}, \${DB_PASSWORD}, \${DB_USER}, \${PORT}, \${DB_DRIVER} and \${JWT_SECRET}.

## Running the project

- If you are using IntelliJ ide you can run it with the green run/play button, but don't forget to load the environment variables.

- Otherwise, to run the project through the command line:
```bash
mvnw spring-boot:run
```

## Swagger-ui

- You can access the swagger-ui docs to test the API through http://localhost:8080/api/v1/swagger-ui/index.html

- If you have configured a different port than 8080 use that one instead.

# Proyecto backend para la aplicación educativa "Eureka"

## Tecnologías

- Spring framework
- Java 17
- Maven
- PostgreSQL

## Requisitos
- JDK 17 instalado
- Base de datos PostgreSQL configurada
- Git

## Configuración
- clonar el repositorio:
```bash
clone git https://github.com/No-Country/s14-11-m-java.git
```

- Moverse a la carpeta backend

> Si está utilizando IntelliJ, puede cargar las variables de entorno con el complemento "envFile" y crear un archivo .env usando .env.example como referencia.

> De lo contrario, puede modificar el archivo application.properties en `backend/src/main/resource`, reemplazando \${DB_USER}, \${DB_PASSWORD}, \${DB_USER}, \${PORT}, \${ DB_DRIVER} y \${JWT_SECRET} por los valores correspondientes.

## Ejecutando el proyecto

- Si estás usando IntelliJ ide, puedes ejecutarlo con el botón verde ejecutar/reproducir, pero no olvides cargar las variables de entorno.

- En caso contrario, para ejecutar el proyecto a través de la línea de comando:
```bash
mvnw spring-boot:run
```

## Swagger-ui

- Puede acceder a los documentos de swagger-ui para probar la API a través de http://localhost:8080/api/v1/swagger-ui/index.html

- Si ha configurado un puerto diferente al 8080, utilice ese en su lugar.
