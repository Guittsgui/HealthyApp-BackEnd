import { response } from 'express';
import { User } from '../ model/UserModel.js';

class UserController{

    async index(request,response){
        // listar todos os usuários
        const users = await User.findAll()
        const json = JSON.stringify(users)
        response.json(users)
    }

    async show(request,response){
        response.json({msg: "vodka"})
    }

    async store(request,response){
        const {fullname, email, password} = request.body
        const newUser = {
            name: fullname,
            email: email,
            password: password
        }
        User.create(newUser)
        await response.status(201).json({msg: "Usuário Cadastrado com Sucesso."})
    }

    update(){
        //ALTERAR Registro
    }

    delete(){
     //remover registro
    }

}

export default new UserController()