import { response } from 'express';
import { User } from '../ model/UserModel.js';

class UserController{

    async index(request,response){
        // listar todos os usuários
        const users = await User.findAll()
        const json = JSON.stringify(users)
        response.json(users)
    }
    async show(request,response,id){

        const user = await User.findByPk(id)

        response.json({msg: "vodka"})
    }
    async store(request,response){
        // salvar novo registor
        
        await response.json({})
    }
    update(){
        //ALTERAR Registro
    }
    delete(){
     //remover registro
    }

}

export default new UserController()