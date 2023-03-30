import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

export const User = sequelize.define("User", {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
},{
    tableName: 'users',
    timestamps: true
})