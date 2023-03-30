import {sequelize} from '../instances/mysql.js'
import { DataTypes } from "sequelize"

export const User = sequelize.define("User",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        required:true
    },
    name:{
        type: DataTypes.STRING,
        required:true
    },
    email:{
        type: DataTypes.STRING,
        required:true
    },
    password:{
        type: DataTypes.STRING,
        required:true
    }

},{
    tableName: 'users',
    timestamps:false
})