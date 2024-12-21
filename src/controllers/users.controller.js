import { usersService } from "../services/index.js"
import { createHash } from "../utils/tools.js"

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"Usuario no Encontrado"})
    res.send({status:"success",payload:user})
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"Usuario no Encontrado"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"Usuario Actualizado Exitosamente"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if (!user) return res.status(404).send({status:"error",error:"Usuario no Encontrado"})
    const result = await usersService.delete(user._id);
    if (result) return res.status(200).send({status:"success",message:"Usuario Eliminado Exitosamente"})
}

const createUser = async(req,res) =>{
    try {
        const { first_name, last_name, email, password, role, sex } = req.body
        if (!first_name || !last_name || !email || !password)
            res.status(400).send({ status: "error", error: "Existen campos requeridos" })

        const duplicatedUser = await usersService.getUserByEmail(email)
        if (duplicatedUser)
            res.status(400).send({ status: "error", error: "El correo electrónico ya existe, debe ser único por usuario" })

        //let newUser = { first_name, last_name, email, password: createHash(password), sex, role }
        const result = await usersService.create({ first_name, last_name, email, password: createHash(password), sex, role })
        if (result)
            res.status(200).send({status:"success",message:"Usuario Creado Exitosamente"})
    } catch (error) {
        res.status(500).send({status: "error", message: error.message})
    }
}

export default {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
    createUser
}