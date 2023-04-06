import {Diet} from './../ model/DietModel.js'

class DietController{

    async findDietByUserId(request, response){
        const id = request.params.id 
        const dietSearched = await Diet.findAll({where: {userId: id}})
        if(!dietSearched){
            response.status(400).json({msg: 'Este usuário ainda nao possui um planejamento Alimentar.'})
            return
        }
        response.status(200).json(dietSearched)
    }

    async delete(request, response){
        const id = request.params.id
        await Diet.destroy({where: {id: id}})
    }

    async store(request, response){
        const {title,diet,dateExpires,userId} = request.body
        const newDiet = {
            title: title,
            diet: diet,
            dateExpires: dateExpires,
            userId: userId
        }
        Diet.create(newDiet)
        await response.status(201).json({msg: "Dieta Cadastrada com Sucesso"})       
    }
}

export default new DietController()