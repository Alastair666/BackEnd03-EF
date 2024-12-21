import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Insertar un nuevo Usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Nombre del usuario
 *               last_name:
 *                 type: string
 *                 description: Apellido del usuario
 *               email:
 *                 type: string
 *                 description: Email del usuario (Único)
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario (Encriptada)
 *               role:
 *                 type: string
 *                 description: Rol del usuario (Admin, User)
 *             example:
 *               first_name: Carlos
 *               last_name: Limón
 *               email: climon@coderhouse.com
 *               password: coder1234
 *               role: admin
 *     responses:
 *       201:
 *         description: Usuario Creado Exitosamente
 *       400:
 *         description: Hay un Error en los datos ingresados | Usuario Previamente Creado
 *       500:
 *         description: Error Interno del Servidor (Desconocido)
 */
router.post('/', usersController.createUser);
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios (JSON)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Identificador único (ID) del Usuario
 *                   first_name:
 *                     type: string
 *                     description: Nombre del Usuario
 *                   last_name:
 *                     type: string
 *                     description: Apellido del Usuario
 *                   email:
 *                     type: string
 *                     description: Email del Usuario
 */
router.get('/',usersController.getAllUsers);
/**
 * @swagger
 * /api/users/{uid}:
 *   get:
 *     summary: Obtener un usuario por Identificador (ID)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador único (ID) del Usuario
 *     responses:
 *       200:
 *         description: Usuario Único
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Identificador único (ID) del Usuario
 *                 first_name:
 *                   type: string
 *                   description: Nombre del usuario
 *                 last_name:
 *                   type: string
 *                   description: Apellido del usuario
 *                 email:
 *                   type: string
 *                   description: Email del usuario
 *       404:
 *         description: No fue posible encontrar al Usuario
 */
router.get('/:uid',usersController.getUser);
/**
 * @swagger
 * /api/users/{uid}:
 *   put:
 *     summary: Actualizar un usuario por Identificador (ID)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador único (ID) del Usuario por Actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Nombre del usuario
 *               last_name:
 *                 type: string
 *                 description: Apellido del usuario
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *             example:
 *               first_name: Carlos
 *               last_name: Limón
 *               email: climon@coderhouse.com
 *     responses:
 *       200:
 *         description: Usuario Actualizado Exitosamente
 *       404:
 *         description: No fue posible encontrar al Usuario
 */
router.put('/:uid',usersController.updateUser);
/**
 * @swagger
 * /api/users/{uid}:
 *   delete:
 *     summary: Eliminar un usuario por Identificador (ID)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador único (ID) del Usuario por Eliminar
 *     responses:
 *       200:
 *         description: Usuario Eliminado Exitosamente
 *       404:
 *         description: No fue posible encontrar al Usuario
 */
router.delete('/:uid',usersController.deleteUser);

export default router;