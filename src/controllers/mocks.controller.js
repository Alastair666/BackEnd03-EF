import MockService from '../services/mock.service.js'

export const mockingUsers = async(req,res)=>{
    req.params.num = 50
    const num = req.params.num
    const result = await MockService.generateMockingUsers(num)
    if (result)
        res.status(200).json({ result: "success", payload: result })
    else
        res.status(400).json({ result: "error", errors: "Can't get mock users" })
}
export const mockingUsersRequestNum = async(req,res)=>{
    const num = req.params.num
    const result = await MockService.generateMockingUsers(num)
    if (result)
        res.status(200).json({ result: "success", payload: result })
    else
        res.status(400).json({ result: "error", errors: "Can't get mock users" })
}
export const mockingPets = async(req, res)=>{
    const num = req.params.num
    const result = await MockService.generateMockingPets(num)
    if (result)
        res.status(200).json({ result: "success", payload: result })
    else
        res.status(400).json({ result: "error", errors: "Can't get mock users" })
}
export const mockingPetsRequestNum = async(req, res)=>{
    req.param.num = 100
    const num = req.params.num
    const result = await MockService.generateMockingPets(num)
    if (result)
        res.status(200).json({ result: "success", payload: result })
    else
        res.status(400).json({ result: "error", errors: "Can't get mock users" })
}
export const generateData = async(req, res)=>{
    const num_user = req.params.users
    const num_pets = req.params.pets
    if (num_user && num_pets) {
        const result = await MockService.generateMockingUsersAndPets(num_user, num_pets)
        if (result)
            res.status(200).json({ result: "success", payload: result })
        else
            res.status(400).json({ result: "error", errors: "Can't get mock users" })
    }
    else
        res.status(400).json({ result: "error", errors: "Must provide both users and pets numbers" })
}