const route = require('express').Router();
const userController = require('../controllers/user.controller');

route.get("/start", ()=>{
    console.log("Teste de rotas com sucesso")
})

route.post("/user/add", userController.create);
route.get("/user/add", userController.findAll);
route.get("/user/:id", userController.findById);
route.patch("/user/:id", userController.update)

module.exports = route;