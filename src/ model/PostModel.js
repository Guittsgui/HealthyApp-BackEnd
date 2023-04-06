import {sequelize} from '../instances/mysql.js'
import { DataTypes } from "sequelize"

export const Post = sequelize.define("Post",{
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
    type:{
        type: DataTypes.STRING,
        required: true
    },
    content:{
        type: DataTypes.STRING,
        required: true
    },
    url:{
        type: DataTypes.STRING,
        required: true
    },
    likes:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

},{
    tableName: "blog",
    timestamps: false
})