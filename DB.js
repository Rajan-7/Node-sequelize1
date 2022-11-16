const Sequelize=require('sequelize');

const DB=new Sequelize({
    database:'postgres',username:'postgres',
    password:'postgres',dialect:'postgres',
    port:5432,
    host:'localhost',
    logging:true,
});
 
module.exports=DB;

