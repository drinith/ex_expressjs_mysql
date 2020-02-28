const Sequelize = require('sequelize')
const Express = require('express')
const app = Express()
const sequelize = new Sequelize('teste','usuario','password',{
    host:'localhost',
    dialect:'mysql'
    
})


const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})




const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }

})

Postagem.create({
    titulo:"Teste",
    conteudo: "Conteudo"
})

/*sequelize.authenticate().then((resultado)=>{
    console.log('Conectado com sucesso!')
}).catch((erro)=>{
    console.log('Falha ao se conectar '+ erro)
})*/

//Postagem.sync({force:true})