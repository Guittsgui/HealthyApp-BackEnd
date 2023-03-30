import { sequelize } from "../instances/mysql.js"


class UserController{

    async index(request,response){
        // listar todos os usuários
        try{
            await sequelize.authenticate()
            console.log('banco funcionando')
        }catch{
            console.log('deu ruim')
        }
        response.json({msg: "all jsons "})
    }

    show(){
        // obter um registro
    }

    store(){
        // salvar novo registor
    }

    update(){
        //ALTERAR Registro
    }

    delete(){
     //remover registro
    }

}

export default new UserController()