const express =require('express');
const {Sequelize}=require('sequelize');


const User=require('./user-model');
const Profile=require('./profile-model');
const sequelize = require('./DB');


// User.hasOne(Profile);
User.hasOne(Profile, { foreignKey: 'userId' });

sequelize.
    sync({force:true})
    .then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });

const app=express();
app.use(express.json());
const port=4003;

app.listen(port,()=>{
  console.log('Server Running at Port 4003');
});