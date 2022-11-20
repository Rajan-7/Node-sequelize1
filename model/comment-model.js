// const { json } = require('sequelize');

const Sequelize =require('sequelize');
const DB = require('../DB');

const comment=DB.define('comment',{
    id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    Text:{
        type:Sequelize.DataTypes.TEXT,
        allowNull:false
    }
});
module.exports=comment;
    
