import {Router } from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middleware.js";

const router = Router()

router.post("/user/add", userController.create);
router.get("/user",/*aquiEntraMiddleware*/userController.findAll);
router.get("/user/:id", validId, validUser, userController.findById);
router.patch("/user/:id", validId, validUser, userController.update);

export default router;

