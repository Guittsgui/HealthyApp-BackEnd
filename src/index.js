import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import routes from './routes.js';
import { User } from './ model/UserModel.js';

 
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

app.use(routes)
app.use((req,res)=>{
    res.status(404)
    res.json({error: "página não existenet"})
})

app.listen(process.env.PORT)