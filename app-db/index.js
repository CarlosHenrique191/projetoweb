const express = require("express");
const model = require("./models");

const app = express();
const Exemplo = model.exemploModel;
//middlewares

//transforma o corpo da requisição em json
app.use(express.json());

//endpoint criar exemplo
app.post("/exemplo",(request,response)=> {
    //Promises
    Exemplo.create(request.body).then((dadoBanco)=>{
        response.send(dadoBanco);
    }).catch((error)=>{
        console.log(error);
        //500 erro servidor
        response.sendStatus(500);
    })
});

//Endpoint para buscar exemplo por id
app.get("/exemplo/:id",(request,response)=>{
    Exemplo.findByPk(request.params.id).then((dadoBando)=>{
        console.log(dadoBando);
        response.send(dadoBando.dataValues);
    })
    .catch((error)=> response.send(error));
});

//Inicialização do servidor
app.listen(8888, (request, response)=>{
    console.log("Funcionou")
})