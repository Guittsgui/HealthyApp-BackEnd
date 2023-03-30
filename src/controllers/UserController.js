import { response } from 'express';
import { User } from '../ model/UserModel.js';

class UserController{

    async index(request,response){
        // listar todos os usuários
        const users = await User.findAll()
        const json = JSON.stringify(users)
        response.status(200).json(users)
    }

    async show(request,response){
        
    }

    async store(request,response){
        const {fullname, email, password} = request.body
        const newUser = {
            name: fullname,
            email: email,
            password: password
        }
        const hasUser = await User.findOne({where: {email: email}})
        if(hasUser){
            await response.status(404).json({msg: "Email já Cadastrado"})
            return
        }
        User.create(newUser)
        await response.status(201).json({msg: "Usuário Cadastrado com Sucesso"})
    }

    update(){
        //ALTERAR Registro
    }

    delete(){
     //remover registro
    }

    async verifyLogin(request, response){
        const {email, password} = request.body
        const hasUser = await User.findOne({where: {email: email, password: password}})
        console.log(hasUser)
        if(hasUser){
            response.status(200).json({msg: 'Usuário Encontrado'})
        }else{
            response.status(400).json({msg: 'Login ou Senha Inválidos'})
        }
    }
    
}

export default new UserController()