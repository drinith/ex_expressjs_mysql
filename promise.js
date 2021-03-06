let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("A promise 1 foi resovida")
    },2000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("A promise 2 foi resovida")
    },2000);
});

promise2.then((resultado)=>{
    console.log(resultado);
}).catch((error)=>{
    console.error(error)
})


Promise.all([promise1,promise2])
.then(([resultado1,resultado2])=>{
    console.log('Todas as proises foram resolvidas')
    console.log(resultado1)
    console.log(resultado2)

})
.catch((error)=>{
    console.log("Uma das promises foi rejeitada")
    console.log(error)
})
