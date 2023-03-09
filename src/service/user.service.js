
import User from "../models/User.js";
import { updateService as update } from "../controllers/user.controller.js";
import  router  from "../routes/user.route.js";
//const { update } = require("../controllers/user.controller");
//const User = require("../models/User");
//const { unsubscribe } = require("../routes/user.route");

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id,
    name,
    username,
    email,
    password,
    avatar,
    background
) =>
    User.findOneAndUpdate(
        { _id: id },
        { name, username, email, password, avatar, background }
    );

export default {
    createService,
    findAllService,
    findByIdService,
    updateService:update
};