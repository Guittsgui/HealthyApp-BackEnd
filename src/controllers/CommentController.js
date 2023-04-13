import{Comment} from './../ model/CommentModel.js'

class ComentController{

    async store(request, response){

        const{ postId, userId, content, date} = request.body
        if(!postId || !userId || !content || !date){
            response.status(400).json({msg: "Não conseguimos adicionar seu Post."})
            return
        }
        const CommentToAdd = {
            postId: postId,
            userId: userId,
            content: content,
            date: date
        }
        await Comment.create(CommentToAdd)
        response.status(201).json({msg: 'Post criado com sucesso.'})
    }

    async getCommentByPostId(request,response){
        const id = request.params.id
        const commentsList = await Comment.findAll({where: {postId: id}})
        response.status(200).json(commentsList)
    }

}

export default new ComentController()