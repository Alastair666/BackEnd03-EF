import request from 'supertest'
import { expect } from 'chai'
import app from '../app.js'
import MockService from '../services/mock.service.js'

describe('Rutina de Pruebas de la Entidad: Usuarios (Users)', function(){
    this.timeout(50000)
    // Declarando variables para mockear servicios
    let userID
    /*this.beforeEach(async ()=>{
        // Creando un usuario
        const fakeUser = await MockService.generateMockingUsers(1)[0]
        const newUser = await usersService.create(fakeUser)
        userID = newUser._id
    })//*/
    it(`POST - 'api/users/' : Debería de crear un usuario de manera satisfactoria`, async function(){
        try {
            const fakeUser = await MockService.generateMockingUsers(1)
            fakeUser[0].password = 'coder1234'
            //console.log(JSON.stringify(fakeUser[0]))
            const result = await request(app).post('/api/users/').send(fakeUser[0]).set('Content-Type', 'application/json')
            expect(result.status).to.equal(200)
            expect(result.body).to.have.property('status', 'success')
            expect(result.body).to.have.property('message', 'Usuario Creado Exitosamente')
        } catch (error) {
            console.error(error)
        }
    })
    it(`GET - 'api/users/' : Debería de obtener los usuarios de manera satisfactoria`, async function(){
        try {
            const result = await request(app)
                .get('/api/users/')
                .set('Content-Type', 'application/json')
            //console.log(result.body)
            expect(result.status).to.equal(200)
            expect(result.body).to.have.property('status', 'success')
            expect(result.body.payload).to.be.an('array');
        } catch (error) {
            console.error(error)
        }
    })
})