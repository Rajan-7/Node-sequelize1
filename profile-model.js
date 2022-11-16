const Sequelize=require('sequelize');
const sequelize = require('./DB');
const profile=sequelize.define("profile",{
    id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    imageUrl:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    }
},{freezeTable:false,timeStamp:true});
module.exports=profile;