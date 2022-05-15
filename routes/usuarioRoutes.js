import express from "express";
const router = express.Router();
import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
} from "../controllers/usuarioController.js";

//Autenticacion, registro y confirmacion de usuarios
router.post("/", registrar); //Crea un nuevo usuario
router.post("/login", autenticar); //Confirma un usuario
router.get("/confirmar/:token", confirmar); //Confirma un usuario
router.post("/olvide-password", olvidePassword);

export default router;
