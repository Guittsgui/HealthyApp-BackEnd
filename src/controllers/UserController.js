import { response } from 'express';
import { User } from '../ model/UserModel.js';
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

class UserController{

    async index(request,response){
        // listar todos os usuários
        const users = await User.findAll()
        response.status(200).json(users)
    }

    async show(request,response){
        const id  = request.params.id 
        const user = await User.findOne({where: {id: id}})
        response.status(200).json(user)
    }

    async store(request,response){
        const {fullname, email, password, gender} = request.body
        const newUser = {
            name: fullname,
            email: email,
            password: password,
            gender: gender
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

        if(hasUser){
            const token = JWT.sign(
                {id: hasUser.id, email: hasUser.email},
                process.env.JWT_SECRET_KEY,
                { expiresIn: '2h'}
            )
            response.status(200).json({token, msg: "Usuário Encontrado!", hasUser})
        }else{
            response.status(400).json({msg: 'Login ou Senha Inválidos'})
        }
    }
    
}

export default new UserController()