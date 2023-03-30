import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

const app = express()

app.use(cors({
    origin: '*',
    methods: '*'
}))

dotenv.config()

app.use(express.urlencoded({
    extended:true,
}),)

app.use(express.json())

app.use((req,res)=> {
    res.status(404)
    res.json({error: "página não encontrada"})
})

app.get('/' , (req,res)=>{
    res.json({message: 'primeira rota criada com sucesso'})
})

app.listen(process.env.PORT)