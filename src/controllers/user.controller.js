const { default: mongoose } = require("mongoose");
const userService = require("../service/user.service")
const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body; 

    if (!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({message: "submit all fields for registration"});
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "error creating user" });
    }

    res.status(201).send({
        message: "user name created sucessfully",
        user: {
            // id: user_id,
            name,
            username,
            email,
            password,
            avatar,
            background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.legth === 0) {
        return res.status(400).send({ message: "there are no registered users" });
    }

    res.send(users)
};
const findById = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "invalid id" });
    }

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "user not found" });
    }

    res.send(user);

};

const update = async (req, res)=> {
    const {name, username, email, password, avatar, background} = req.body;
   
    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).send({ message: "submit at last one fields for update" });
    }      
    
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Invalid ID"});

    }

    const user = await userService.findByIdService(id);

    if(!user) {
     return res.status(400).send({message: "user not fond"});
    }

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    );

    res.send({message:"user sucessfully updated "});
};

module.exports = { create, findAll, findById, update };