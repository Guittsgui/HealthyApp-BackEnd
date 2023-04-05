import {sequelize} from '../instances/mysql.js'
import { DataTypes } from "sequelize"

export const Diet = sequelize.define("Diet",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required:true
    },
    title:{
        type: DataTypes.STRING,
        required: true
    },
    diet: {
        type: DataTypes.STRING,
        required: true
    },
    dataExpires: {
        type: DataTypes.DATE,
        required:true
    },
    userId: {
        type: DataTypes.INTEGER,
        required:true
    }
},{
    tableName: 'diet',
    timestamps: 'false'
})