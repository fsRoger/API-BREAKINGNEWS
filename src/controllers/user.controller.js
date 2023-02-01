const userService = require("../service/user.service")
const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body; 

    if (!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({message: "submit all fields for registration"});
    }

    const user = await userService.create(req.body);

    if(!user){
        return res.status(400).send({message: "error creating user"});
    }

    res.status(201).send({
        message: "user name created sucessfully",
        user: {
            id: user_id,
            name,
            username,
            email,
            password,
            avatar,
            background,
        },
    });
};

module.exports = { create };