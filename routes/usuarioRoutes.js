import express from "express";
const router = express.Router();
import { registrar } from "../controllers/usuarioController.js";

//Autenticacion, registro y confirmacion de usuarios
router.post('/', registrar);//Crea un nuevo usuario




export default router;
