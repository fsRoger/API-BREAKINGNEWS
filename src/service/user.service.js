const { update } = require("../controllers/user.controller");
const User = require("../models/User");
const { unsubscribe } = require("../routes/user.route");

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
    )


module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService
}