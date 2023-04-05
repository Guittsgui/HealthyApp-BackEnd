import {sequelize} from '../instances/mysql.js'
import { DataTypes } from "sequelize"

export const User = sequelize.define("User",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required:true
    },
    name:{
        type: DataTypes.STRING,
        required:true,
    },
    email:{
        type: DataTypes.STRING,
        required:true
    },
    password:{
        type: DataTypes.STRING,
        required:true
    },
    isadm:{
        type: DataTypes.TINYINT,
        defaultValue: 0
    },
    gender:{
        type: DataTypes.STRING,
        defaultValue: 'male'
    },
    height: {
        type: DataTypes.DECIMAL,
    },
    weight:{
        type: DataTypes.DECIMAL,
    },
    imc: {
        type: DataTypes.DECIMAL,
    },
    goal: {
        type: DataTypes.STRING
    }

},{
    tableName: 'users',
    timestamps:false
})