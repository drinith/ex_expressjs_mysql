//exportando um módulo que eu vou passar
//uma função que tem uma função como parametro
module.exports = function(callback){
    console.log("rodei função raiz")
    setTimeout(() => {
        callback("executando callback", 122345)
            
    }, 5000);
    
}