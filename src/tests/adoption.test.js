import request from 'supertest'
import { expect } from 'chai'
import app from '../app.js'
import MockService from '../services/mock.service.js'
import { usersService, petsService, adoptionsService } from '../services/index.js'

describe('Rutina de Pruebas de la Entidad: Adopciones (Adoptions)', function() {
    this.timeout(50000);
    let userID, petID, adoptionID, count = 1
    beforeEach(async ()=>{
        // Creando un usuario y mascota
        const fakeUser = await MockService.generateMockingUsers(1)
        const fakePet = await MockService.generateMockingPets(1)
        // Insertando en base de datos
        const newUser = await usersService.create(fakeUser[0])
        const newPet = await petsService.create(fakePet[0])
        // Creando Adopción de Prueba
        const newAdoption = await adoptionsService.create({ owner: newUser._id, pet: newPet._id})
        // Almacenando ID's
        userID = newUser._id
        petID = newPet._id
        adoptionID = newAdoption._id
        //console.log({ count, userID, petID, adoptionID })
        count++
    })

    /** TEST(S) UNITARIOS **/
    it ('Debe de agregar un registro de adopción', async function() {
        try {
            let uri = `/api/adoptions/${userID}/${petID}`
            console.log(uri)
            const response = await request(app).post(uri).set('Content-Type', 'application/json')
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('status', 'success')
            expect(response.body).to.have.property('message', 'Pet adopted');
        } catch (error) {
            console.error(error)
        }
    })
    it('Debe de regresar la lista de adopciones', async function() {
        try {
            const result = await request(app).get('/api/adoptions/').set('Content-Type', 'application/json')
            expect(result.status).to.equal(200)
            expect(result.body).to.have.property('status', 'success')
            //expect(result.body.payload).to.be.an('array');
        } catch (error) {
            console.error(error)
        }
    })
    it('Debe de regresar un registro de adopción dado un Identificador (ID)', async function() {
        try {
            let uri = `/api/adoptions/${adoptionID}`
            console.log(uri)
            const result = await request(app).get(uri).set('Content-Type', 'application/json')
            //console.log(result.body)
            expect(result.status).to.equal(200)
            expect(result.body).to.have.property('status', 'success')
            //expect(result.body.payload).to.be.an('array');
        } catch (error) {
            console.error(error)
        }
    })
})