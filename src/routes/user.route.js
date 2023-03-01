const express = require('express');
const userController = require('../controllers/user.controller');

const userRoute = express();

userRoute.post("/user/add", userController.create);
userRoute.get("/user", userController.findAll);
userRoute.get("/user/:id", userController.findById);
userRoute.patch("/user/:id", userController.update)

module.exports = userRoute;

