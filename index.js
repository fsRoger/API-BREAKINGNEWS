//const { json } = require("express");
//app.use(json);
const express = require("express");
const userRoute = require("./src/routes/user.route")

const app = express();

app.use("/soma", userRoute);

//ROTA
//Method HTTP - CRUD (CREATE,READ,UPDATE,DELETE)
//GET - Pega uma info
//POST - Cria uma info
//PUT - Altera toda info
//PATH - Altera parte da info 
//DELETE - Apaga uma info

//NAME - Um identificador da rota

//Function (Callback) - Responsavel por execultar algum comando


//funcao de callback, precisa ser funcao anonima, sem nome definido, apenas function(){},pode ser escrita arrow function ()=>{}
//app.get("/soma", (req, res) => {
//  const soma = 1 + 1;

//res.json(soma)
// res.send({soma: soma})
//});

app.listen(3000);