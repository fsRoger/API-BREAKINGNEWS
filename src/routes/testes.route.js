const express = require('express');

const statusRoute = express();

statusRoute.get("/status", (req, resp, next)=>{
    let message = "Teste de rotas com sucesso";
    console.log(message);
    resp.status(200).send(message)
});

module.exports = statusRoute;
