import express from "express";
const router = express.Router();
import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
} from "../controllers/usuarioController.js";

//Autenticacion, registro y confirmacion de usuarios
router.post("/", registrar); //Crea un nuevo usuario
router.post("/login", autenticar); //Confirma un usuario
router.get("/confirmar/:token", confirmar); //Confirma un usuario
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);

export default router;
