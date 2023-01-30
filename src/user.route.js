const route = require('express').Router();
const userController = require('../controllers/user.controller')

route.get("/npmm", userController.soma)

module.exports = route;