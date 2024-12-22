# Entrega Final. Programación Backend III: Testing y Escalabilidad Backend - Comisión 70075

## Dockerizando nuestro Proyecto

### Objetivos generales
- Implementar las últimas mejoras en nuestro proyecto y Dockerizarlo.
### Objetivos específicos
- Documentar las rutas restantes de nuestro proyecto.
- Añadir los últimos tests.
- Crear una imagen de Docker.

**Se debe entregar** : 
1. Desarrollar los tests funcionales para todos los endpoints del router **“adoption.router.js”**.
2. Desarrollar el Dockerfile para generar una imagen del proyecto.
3. Subir la imagen de Docker a Dockerhub y añadir en un ReadMe.md al proyecto que contenga el link de dicha imagen.

**Formato** : 
1. Link al repositorio de Github, sin la carpeta de node_modules.
    ```sh
    https://github.com/Alastair666/BackEnd03-EF.git
2. Link a la imagen de Docker en Dockerhub.
    ```sh
    https://hub.docker.com/repository/docker/alastairblackwell/backend03-ef

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Variables de Entorno](#variables-de-entorno)
4. [Implementación 1.0](#implementación-10)
5. [Implementación 2.0](#implementación-20)
5. [Conclusiones](#conclusiones)

## Introducción
Este proyecto es la entrega final del curso "Programación Backend III: Testing y Escalabilidad Backend" de la plataforma Coderhouse.

## Instalación

### Requisitos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Docker (versión 20 o superior)

### Instalación de Node.js
Para instalar Node.js, sigue estos pasos:

1. Descarga el instalador desde la página oficial de Node.js.
2. Ejecuta el instalador y sigue las instrucciones en pantalla.
3. Verifica la instalación ejecutando los siguientes comandos en tu terminal:
   ```bash
   node -v
   npm -v

### Instalación de Librerías
1. Una vez que Node.js esté instalado, puedes instalar las librerías necesarias para este proyecto. Ejecuta el siguiente comando en la raíz del proyecto:
    ```sh
    npm install
2. Librerias utilizadas:
    ```sh
    @faker-js/faker: 9.2.0
    bcrypt: 5.1.1
    cookie-parser: 1.4.6
    dotenv: 16.4.5
    express: 4.18.2
    jsonwebtoken: 8.5.1
    mongoose: 6.7.5
    multer: 1.4.5-lts.1
    swagger-jsdoc: 6.2.8
    swagger-ui-express: 5.0.1

## Variables de entorno
- Para la base de datos, se requiere la variable de entorno MONGO_URI, que se puede configurar en el archivo .env o en el archivo de configuración de la aplicación.
    ```sh
    mongodb+srv://alastairblackwell:gpO4EZ07YSlrYhKU@cluster0.hprwu.mongodb.net/
- Para ejecutar la aplicación, se requiere la variable de entorno PORT, que se puede configurar en el archivo .env o en el archivo de configuración de la aplicación.
    ```sh
    8080
- Puede explorar más variables de entorno en el archivo de configuración de la aplicación **settings.env**.

## Implementación 1.0
- Para verificar que la aplicación esté funcionando correctamente, se pueden ejecutar los siguientes comandos:
    ````sh
    npm start
- Para esta entrega se desarollaron los siguientes endpoints:
- **GET /mockingpets** : El cual permite generar un mock de la base de datos, con respecto a la colección "pets", y devuelve un arreglo de objetos con la información de los mismos. Adicionalmente si se especifica el parámetro **"/:num"** se devuelve un arreglo con la cantidad de elementos especificados, en caso de que se ejecute solo, devolverá un arreglo con 100 elementos.
- ![MockingPets01](./img/mockingpets01.jpg)**Endpoint invocado por defecto (100 registros)**
- ![MockingPets02](./img/mockingpets02.jpg) **Endpoint invocado con un número específico de registros (2)**

- **GET /mockingusers** : El cual permite generar un mock de la base de datos, con respecto a la colección "users", y devuelve un arreglo de objetos con la información de los mismos. Adicionalmente si se especifica el parámetro **"/:num"** se devuelve un arreglo con la cantidad de elementos especificados, en caso de que se ejecute solo, devolverá un arreglo con 50 elementos.
- ![MockingUsers01](./img/mockingusers01.jpg)**Endpoint invocado por defecto (50 registros)**
- ![MockingUsers02](./img/mockingusers02.jpg) **Endpoint invocado con un número específico de registros (1)**

- **POST /generateData/:users/:pets** : El cual permite la generación de usuarios y sus respectivas mascotas, utilizando los métodos de generación aleatoria de usuarios y mascotas, y devuelve un arreglo de objetos con la información de los mismos, ahora con la diferencia de que son registros reales en la base de datos.
- ![GenerateData01](./img/generateData01.jpg)

## Implementación 2.0
Para esta entrega se solicito implementar los conceptos de testing y su respectiva documentación dentro del proyecto.

### Documentación
Se utilizo a **Swagger** como herramienta principal:
![SwaggerUsers](./img/swagger_users.jpg)
**Documentación de los Endpoints de la Colección "users"**

Se muestra la documentación del endpoint **Users (api/users)**
- **POST /api/users** : Permite ingresar un nuevo usuario
![SwaggerUsers](./img/swagger_users_post01.jpg)
- **GET /api/users** : Permite obtener todos los usuarios
![SwaggerUsers](./img/swagger_users_get01.jpg)
- **GET /api/users/:uid** : Permite obtener el usuario especificado dado el ID
![SwaggerUsers](./img/swagger_users_get02.jpg)
- **PUT /api/users** : Permite actualizar el usuario especificado dado el ID
![SwaggerUsers](./img/swagger_users_put01.jpg)
- **DELETE /api/users** : Permite eliminar el usuario especificado dado el ID
![SwaggerUsers](./img/swagger_users_delete01.jpg)

### Testing
- Se utilizo **supertest**, **chai** y **mocha** como herramientas principales para la implementación de pruebas unitarias. Se realizaron pruebas unitarias para los siguientes endpoints:
    - **POST /api/adoptions/:uid/:pid** : Permite ingresar el registro de adopción dados los ID's de Usuario y Mascota.
        - **Test 1**: Verificar que el endpoint devuelve un código de estado 200 (Ok)
        - **Test 2**: Verificar que el endpoint devuelve el mensaje de respuesta "Pet Adopted"
    - **GET /api/adoptions** : Permite obtener todos los registro de adopción de usuarios.
        - **Test 1**: Verificar que el endpoint devuelve un código de estado 200 (Ok)
        - **Test 2**: Verificar que el endpoint devuelve el arreglo de objetos con la información de los registros de adopción
    - **GET /api/adoptions/:aid** : Permite obtener el registro de adopción especificado dado el ID.
        - **Test 1**: Verificar que el endpoint devuelve un código de estado 200 (Ok)
        - **Test 2**: Verificar que el endpoint devuelve el objeto con la información del registro
- ![Supertest](./img/testing_adoptions01.jpg) **Ejecución en consola VS Code**

## Conclusiones
- Este proyecto demuestra el uso de Node.js y varias librerías para desarrollar una aplicación backend robusta, inscluyendo los aspectos de **testing** y su respectiva documentación. Si tienes alguna pregunta o necesitas más información, no dudes en contactarme.
- Se pueden realizar los consumos de los endpoints con alguna herramienta  de cliente como Postman o Insomnia (revisar directorio **external-resources**).
    ```
    Este archivo `README.md` proporciona una guía clara y estructurada para la instalación, estructura y uso del proyecto