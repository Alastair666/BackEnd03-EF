import { generateUser, generatePet } from '../utils/tools.js'
import Users from '../dao/Users.dao.js'
import Pet from '../dao/Pets.dao.js'
import Adoption from '../dao/Adoption.js'

export default class MockService {
    static async generateMockingUsers(no = 50) {
        let users = []
        for (let i = 0; i < no; i++) {
            users.push(generateUser())
        }
        return users
    }
    static async generateMockingPets(no = 100) {
        let pets = []
        for (let i = 0; i < no; i++) {
            pets.push(generatePet())
        }
        return pets
    }
    static async generateMockingUsersAndPets(num_users, num_pets) {
        let usersAndPets = []
        //console.log(`# Users:${num_users}\n# Pets:${num_pets}`)
        if (num_users > 0) {
            let users = [], pets = []
            for (let u = 0; u < num_users; u++) {
                let user = generateUser()
                pets = []
                if (num_pets > 0) {
                    for (let p = 0; p < num_pets; p++)
                        pets.push(generatePet())
                    user.pets = pets
                }
                users.push(user)
            }
            //Insertando los datos en la base de datos
            // USUARIOS
            if (users.length > 0){
                for (let u1 = 0; u1 < users.length; u1++) {
                    let user = users[u1]
                    let u = {
                        first_name : user.first_name,
                        last_name : user.last_name,
                        email : user.email,
                        password : user.password,
                        role : user.role,
                        pets : []
                    }
                    const objUser = new Users()
                    const userDB = await objUser.save(u)
                    if (userDB) {
                        //console.log(`User saved: ${userDB.first_name} ${userDB.last_name}`)
                        if (user.pets.length > 0) {
                            for (let p1 = 0; p1 < user.pets.length; p1++) {
                                let pet = user.pets[p1]
                                let p = {
                                    name: pet.name,
                                    specie: pet.specie,
                                    birthDate: pet.birthDate,
                                    adopted: pet.adopted,
                                    owner: userDB._id
                                }
                                const objPet = new Pet()
                                const petDB = await objPet.save(p)
                                if (petDB){
                                    //console.log(`Pet ID:${petDB._id}`)
                                    u.pets.push({ _id: petDB._id })
                                }
                            }
                            const updateUser = await objUser.update(userDB._id, u)
                        }
                        //Añadiendo el usuario a la lista de usuarios
                        const userDB2 = await objUser.getBy(userDB._id)
                        usersAndPets.push(userDB2)
                    }
                }
            }
        }
        return usersAndPets
    }
}