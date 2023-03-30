import { User } from '../ model/UserModel.js';

class UserController{

    index(request,response){
        // listar todos os usuários
        response.json({msg: "all jsonsssss "})
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