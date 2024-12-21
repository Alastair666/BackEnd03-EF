# Primer Pre-Entrega. Programación Backend III: Testing y Escalabilidad Backend - Comisión 70075

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

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Variables de Entorno](#variables-de-entorno)
4. [Evidencias](#evidencias-de-los-requerimientos)
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
- En caso de  que se requiera alguna librería adicional, se puede realizar de manera individual como acontinuación se muestra:
    ```sh
    npm install bcrypt cookie-parser express jsonwebtoken mongoose multer supertest

## Variables de entorno
- Para la base de datos, se requiere la variable de entorno MONGO_URI, que se puede configurar en el archivo .env o en el archivo de configuración de la aplicación.
    ```sh
    mongodb+srv://alastairblackwell:gpO4EZ07YSlrYhKU@cluster0.hprwu.mongodb.net/
- Para ejecutar la aplicación, se requiere la variable de entorno PORT, que se puede configurar en el archivo .env o en el archivo de configuración de la aplicación.
    ```sh
    8080

## Evidencias de los requerimientos
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

## Conclusiones
- Este proyecto demuestra el uso de Node.js y varias librerías para desarrollar una aplicación backend robusta. Si tienes alguna pregunta o necesitas más información, no dudes en contactarme.
- Se pueden realizar los consumos de los endpoints con alguna herramienta  de cliente como Postman o Insomnia (revisar directorio **external-resources**).
    ```
    Este archivo `README.md` proporciona una guía clara y estructurada para la instalación, estructura y uso del proyecto