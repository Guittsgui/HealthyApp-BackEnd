class UserController{

    index(request,response){
        // listar todos os usuários
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