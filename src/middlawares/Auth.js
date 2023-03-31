import req from 'express/lib/request'
import res from 'express/lib/response'
import {User} from '../ model/UserModel'
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

export const Auth = {

    private: (request, response, next) => {

        let success = false
        if(request.headers.authorization){
            try{
                const [authType, token] = request.headers.authorization.split(" ")
                if ( authType === 'Bearer'){
                const decoded = JWT.verify(
                    token, 
                    process.env.JWT_SECRET_KEY)
                }
                success = true
            }catch{}
        }
        if(success){
            next()
        }else{
            response.status(403)
            response.json({msg: 'Não autorizado'})
        }
    }



}