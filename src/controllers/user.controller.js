import mongoose from "mongoose";
import userService from "../service/user.service.js";

const create = async (req, res) => {

    try {
        const { name, username, email, password, avatar, background } = req.body;

        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).send({ message: "submit all fields for registration" });
        }

        const user = await userService.createService(req.body);

        if (!user) {
            return res.status(400).send({ message: "error creating user" });
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
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService();

        if (users.legth === 0) {
            return res.status(400).send({ message: "there are no registered users" });
        }

        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};
const findById = async (req, res) => {
    try {
        const id = req.id
        
        const user = req.user;
        
        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const updateService = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;

        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).send({ message: "submit at last one fields for update" });
        }

        const id = req.params.id;
        
        const user = await userService.findByIdService(id);
    
        await userService.updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        );

        res.send({ message: "user sucessfully updated " });
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export default {create, findAll, findById, updateService};