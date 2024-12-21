import dotenv from 'dotenv'

// Cargar variables de entorno desde el archivo .env
dotenv.config({ path: './src/settings.env' })

export default {
    persistence: process.env.PERSISTENCE,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,
    database: process.env.MONGODB_URI
}