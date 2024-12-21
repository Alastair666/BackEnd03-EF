import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'

/**
 * Funciones de encriptación para la contraseña
 * **/
export const createHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}
/**
 * Funciones de generación de datos (Mocks)
 * **/
export const generateUser = () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        sex: faker.person.sex(),
        password: createHash('coder123'),
        role: Math.random() > 0.5 ? 'user' : 'admin',
        pets: []
    }
}
/**
 * Funciones de generación de datos (Mocks)
 * **/
export const generatePet = () => {
    return {
        name : faker.person.firstName(),
        specie : faker.animal.type(), // Genera una especie de animal 
        birthDate : faker.date.past(10, new Date()), // Genera una fecha de nacimiento en los últimos 10 años 
        adopted : Math.random() >= 0.5, // Genera un valor booleano aleatorio 
        owner : null // El valor por defecto es null
    }
}