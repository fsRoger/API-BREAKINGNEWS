import mongoose from "mongoose";
import userService from "../service/user.service.js";

export const validId = (req, res, next)=>{
    const  id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"Invalid ID"});
    }
    next();
};

export const validUser = async (req, res, next)=>{
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if(!user){
        return res.status(400).send({message:"user not fond"});
    }

    req.id = id;
    req.user = user;

    next();
};

export default {validId, validUser};