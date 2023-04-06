import {sequelize} from '../instances/mysql.js'
import { DataTypes } from "sequelize"

export const Comment = sequelize.define("Comment", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        required:true
    },
    postId:{
        type: DataTypes.INTEGER,
        required: true
    },
    userName:{
        type: DataTypes.STRING,
        required:true
    },
    date: {
        type: DataTypes.DATE,
        required: true
    },
    content:{
        type: DataTypes.STRING,
        required: true
    }

},{
    tableName: "blogcomments",
    timestamps: false
})