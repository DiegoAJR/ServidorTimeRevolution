const express = require("express");
const usuarioController = require("../controllers/Jugador");
const router = express.Router();
const path = require('path');
const Usuario = require("../models/Jugador");

//Obtener los datos del formulario
router.post("/agregarUsuario", usuarioController.postAgregarUsuario);

//Actualiza usuario
router.post("/actualizarUsuario", usuarioController.postActualizarUsuario)

module.exports = router;