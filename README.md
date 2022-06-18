<p align="center">
  <a href="https://reactjs.org">
    <img src="https://img-b.udemycdn.com/course/480x270/4136020_d432_6.jpg" alt="Logo" width=480 height=auto>
  </a>

<h3 align="center">NestJs: Microservicios con NestJs, AWS, Docker Profesional</h3>

<p align="center">
    <b>Udemy Instructor:</b> Andrés Córdoba
    <br>
    <a target:"_blank" href="https://andres-cordova.com/">Página Oficial</a>
    |
    <a target:"_blank" href="https://www.udemy.com/course/node-js-microservicios-ac/">Curso Udemy</a>
  </p>

## Contenido

1. Desarrolle aplicaciones modernas de Nodejs utilizando el framework de NestJS junto con servicios en la nube robustos y escalables

2. Emplee escalabilidad y resistencia en el backend, haciendo uso de un agente de mensajería

3. Entregue la responsabilidad del proceso de autenticación para un servicio seguro, escalable y de bajo costo

4. Aplicar los conceptos de una arquitectura orientada a eventos en la práctica

5. Implementar microservicios con Nest Microservices

6. Swagger UI (Open API)

7. RabbitMQ (Advanced Message Queuing Protocol)

8. Postman

9. Despliegue con Docker en la nube (AWS)

10. Docker

11. TypeScript

12. Docker Compose

13. SSH

## Glosario

- **Microservicios:** Son un enfoque arquitectónico y organizativo para el desarrollo de software donde el software está compuesto por pequeños servicios independientes que se comunican a través de **API** bien definidas. Los propietarios de estos servicios son equipos pequeños independientes. Las arquitecturas de microservicios hacen que las aplicaciones sean **más fáciles de escalar y más rápidas de desarrollar**. Esto permite la innovación y acelera el tiempo de comercialización de las nuevas características.​

- **RabbitMQ**: Es un software de negociación de mensajes de código abierto que funciona como un middleware de mensajería. Implementa el estándar Advanced Message Queuing Protocol.

- **AMQP**: Es un protocolo de estándar abierto en la capa de aplicaciones de un sistema de comunicación. Las características que definen al protocolo AMQP son la orientación a mensajes, encolamiento, enrutamiento, exactitud y seguridad.

- **Swagger**: Es un conjunto de herramientas de software de código abierto para diseñar, construir, documentar, y utilizar servicios web RESTful. Fue desarrollado por SmartBear Software e incluye documentación automatizada, generación de código, y generación de casos de prueba.

- **Docker :** Es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos.​

- **Docker Compose:** Es una herramienta que nos permite ejecutar múltiples contenedores intercomunicados de forma sencilla, haciendo uso de manifiestos, en este caso en formato YAML.

- **JWT:** es un estándar abierto basado en JSON propuesto por IETF para la creación de tokens de acceso que permiten la propagación de identidad y privilegios para poder acceder a rutas protegidas por medio de un Token.

- **MongoDB:** Es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida..

- **Mongoose:** Es un Object Document Mapper (ODM). Esto significa que Mongoose le permite definir objetos con un esquema fuertemente tipado que se asigna a un documento MongoDB.

## Estructura del repositorio

```text
├── 01-api-tasks/
|      └── src/
|           ├── common/
|           |     ├── filters/
|           |     └── interceptors/
|           └── task/
|                 └── dto/
├── 02-api-superflights
|      └── src/
|           ├── auth/
|           |     ├── guards/
|           |     └── strategies/
|           ├── common/
|           |     ├── filters/
|           |     ├── interceptors/
|           |     ├── interfaces/
|           |     ├── models/
|           |     └── interceptors/
|           ├── flight/
|           |     ├── dto/
|           |     └── schema/
|           ├── passenger/
|           |     ├── dto/
|           |     └── schema/
|           ├── user/
|           |     ├── dto/
|           |     └── schema/
|           └── task/
|                 └── dto/
└── 03-microservices-superflights
            ├── api-gateway/
            |     └── src/
            |          ├── auth/
            |          |    ├── guards/
            |          |    └── strategies/
            |          ├── common/
            |          |    ├── filters/
            |          |    ├── interceptors/
            |          |    ├── interfaces/
            |          |    └── proxy/
            |          ├── flight/
            |          |    └── dto/
            |          ├── passenger/
            |          |    └── dto/
            |          └── user/
            |               └── dto/
            ├── microservice-flights
            |     └── src/
            |          ├── common/
            |          |    ├── interfaces/
            |          |    ├── models/
            |          |    └── utils/
            |          └── flight/
            |               ├── dto/
            |               └── schema/
            ├── microservice-passengers
            |     └── src/
            |          ├── common/
            |          |    ├── interfaces/
            |          |    └── models/
            |          └── passenger/
            |               ├── dto/
            |               └── schema/
            └── microservice-users
                  └── src/
                       ├── common/
                       |    ├── interfaces/
                       |    └── models/
                       └── users/
                            ├── dto/
                            └── schema/
```

## Progreso del curso

- [x] Sección 1: Configuración de Entorno.

- [x] Sección 2: Primera Aplicación con NestJs.

- [x] Sección 3: Decoradores de Controlador.

- [x] Sección 4: REST API Tareas.

- [x] Sección 5: Validación de Entrada.

- [x] Sección 6: Excepciones.

- [x] Sección 7: Interceptores.

- [x] Sección 8: Aplicación Monolítica.

- [x] Sección 9: Configuración de Base de Datos.

- [x] Sección 10: Módulo de Usuarios.

- [x] Sección 11: Módulo de Pasajeros.

- [x] Sección 12: Módulo de Vuelos.

- [x] Sección 13: Documentación con OpenAPI (Swagger).

- [x] Sección 14: Protección de Rutas JWT - Guards - Strategies.

- [x] Sección 15: Aplicación de Microservicios.

- [x] Sección 16: Módulo de Usuarios.

- [x] Sección 17: Módulo de Pasajeros.

- [x] Sección 18: Módulo de Vuelos.

- [x] Sección 19: Documentación con OpenAPI (Swagger).

- [x] Sección 20: Microservicio de Usuarios.

- [x] Sección 21: Microservicio de Pasajeros.

- [x] Sección 22: Microservicio de Vuelos.

- [x] Sección 23: Módulo Auth.

- [x] Sección 24: Microservicios en Docker.

- [x] Sección 25: Despliegue en AWS con Docker.

## Descarga, instalación e inicialización

Descargar el repositorio con el método a elección haciendo click en el botón "Code▼".

### Requisitos Previos

###### Antes de inicializar el repositorio son recomendables las siguientes instalaciones.

- **[Visual Studio Code](https://code.visualstudio.com/)**

- **[Postman](https://www.postman.com/downloads/)**

- **[MongoDB](https://www.mongodb.com/try/download/community)**

- **[Compass](https://www.mongodb.com/try/download/compass)**

- **[NodeJs](https://nodejs.org/es/download/)**

- **[Docker](https://docs.docker.com/get-docker/)**

### Instalación

```bash
$ npm install
```

## Correr App

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Licencia

Nest is [MIT licensed](LICENSE).

## Contacto

- Juan Ignacio Sterren [LinkedIn Profile](https://www.linkedin.com/in/sterrenjuan/) - sterrenjuanignacio@gmail.com
