import { Router } from "express"//desestruturaçao, 
//pegando uma funcao que esta dentro do objeto express
const router = Router();

import {login} from "../controllers/auth.controler.js";
router.post("/", login);//ou authControler.login

export default router;