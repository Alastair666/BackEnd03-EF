import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import { serve, setup } from './utils/swagger.js';
import connectDB from './config/database.config.js'

// Cargar variables de entorno desde el archivo .env
dotenv.config({ path: './src/settings.env' });

const app = express();
const PORT = process.env.PORT||8080;
connectDB()

app.use(express.json());
app.use(cookieParser());

app.use('/api-docs', serve(), setup());
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
export default app