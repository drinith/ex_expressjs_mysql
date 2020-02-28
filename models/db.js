const Sequelize = require('sequelize')

//Conexão de banco de dados mysql
const sequelize = new Sequelize('postapp','usuario','password',{
    host:'localhost',
    dialect:'mysql'
    
})

module.exports ={
    Sequelize:Sequelize,
    sequelize:sequelize
}