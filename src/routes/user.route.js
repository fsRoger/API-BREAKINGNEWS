const route = require('express').Router();
const userController = require('../controllers/user.controller');

route.get("/start", ()=>{
    console.log("Teste de rotas com sucesso")
})

route.post("/user/add", userController.create);

module.exports = route;