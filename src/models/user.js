import {DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

export const User = sequelize.define("User", {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING,
        required: true
    },
    email:{
        type: DataTypes.STRING,
        required: true
    },
    password:{
        type:DataTypes.STRING,
        required: true
    }
},{
    tableName: 'users',
    timestamps: true
})