const express = require("express");
const app = express();
const hbs = require('express-handlebars');
const Post = require('./models/Post');
const bodyParser = require('body-parser');

//config
//template engine
app.set('view engine','hbs')
app.engine('hbs', hbs({
    defaultLayout:'main',
    extname: 'hbs' 

}))
//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

/*app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/pages/',
    partialsDir: __dirname + '/views/partials/'
  }));
*/


//Rotas

app.get('/',(req,res)=>{
    Post.findAll({order:[['id','DESC']]}).then((posts)=>{
        res.render('home',{posts:posts})
    })
})

app.get('/cad',(req,res)=>{
    res.render('formulario')
})

app.post('/add',(req,res)=>{
    Post.create({
        titulo:req.body.titulo,
        conteudo:req.body.conteudo
    }).then(()=>{
        res.redirect("/")
    }).catch(()=>{
        res.send("Não foi criado")
    })
   
})

app.get('/delete/:id',(req,res)=>{
    Post.destroy({where:{'id':req.params.id}}).then(()=>{
        res.send("Postagem deletada com sucesso")
    }).catch((erro)=>{
        res.send("Esta postagem não existe!")
    })
    res.redirect('/')
})

//tem que ser sempre a última função
app.listen(8081, ()=>{
    console.log("Servidor Rodando na url http://localhost:8081")
});