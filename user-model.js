const Sequelize =require('sequelize');
const sequelize = require('./DB');

const user=sequelize.define("user",{
    id:{
        type:Sequelize.DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrements:true
    },
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.DataTypes.TEXT(100),
        allowNull:false
    },
},{freezetable:true,timestamp:false});
// user.sync({force:true});
module.exports=user;



