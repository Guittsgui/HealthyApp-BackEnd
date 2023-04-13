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

    async getAllPosts(request, response){
        const allPosts = await Post.findAll();
        console.log(allPosts)
        response.status(200).json(allPosts)
    }

    async getPostByID(request, response){
        const id = request.params.id
        const post = await Post.findOne({where: {id: id}})
        response.status(200).json(post)

    }

}

export default new PostController()