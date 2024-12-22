# Usa una imagen base de Node JS
FROM node:16

# Crea un directorio de trabajo
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json (Si existen)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que corre la aplicación
EXPOSE 8080

# Define comando para ejecutar la aplicación
CMD ["npm", "start"]