let {Sequelize,Model,DataTypes} = require('sequelize');
require('dotenv').config();

const seuqelizeCon=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host:process.env.DB_HOST,
    dialect:'mysql',
    dialectModule: require("mysql2")
});


seuqelizeCon.authenticate().then(()=>{
    console.log('Database connected successfully');
    console.log("connect ho ja bhai");
}).catch((error)=>{
    console.log('Error: '+error);
})

module.exports={seuqelizeCon,Model,DataTypes};