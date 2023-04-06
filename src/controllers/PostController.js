import {Post} from './../ model/PostModel.js'

class PostController{

    async store(request,response){
        const{title, type, content, url} = request.body
        if(!title || !type || !content || !url){
            response.status(404).json({msg: "Informações Inválidas"})
        }
        const newPost = {
            title: title,
            type: type,
            content: content,
            url: url
        }
        await Post.create(newPost)
        response.status(201).json({msg: 'Post Criado com Sucesso'})
    }

}

export default new PostController()