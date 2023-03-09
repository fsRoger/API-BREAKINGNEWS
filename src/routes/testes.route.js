import express from "express";

const statusRoute = express();

statusRoute.get("/status", (req, res, next)=>{
    let message = "Teste de rotas com sucesso";
    console.log(message);
    res.status(200).send(message)
});

export default statusRoute;