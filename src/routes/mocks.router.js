import { Router } from 'express'
import { mockingUsers, mockingUsersRequestNum, mockingPets, mockingPetsRequestNum, generateData } from '../controllers/mocks.controller.js'

const router = Router()

/** GET 
 * Endpoint encargado de generar 'N' usuarios
 * **/
router.get('/mockingusers/:num', mockingUsersRequestNum)
/** GET 
 * Endpoint encargado de generar 50 usuarios
 * **/
router.get('/mockingusers', mockingUsers)
/** GET 
 * Endpoint encargado de generar 'N' mascotas
 * **/
router.get('/mockingpets/:num', mockingPetsRequestNum)
/** GET 
 * Endpoint encargado de generar 100 mascotas
 * **/
router.get('/mockingpets', mockingPets)
/** POST 
 * Endpoint encargado de generar los datos en BD
 * **/
router.post('/generateData/:users/:pets', generateData)

export default router