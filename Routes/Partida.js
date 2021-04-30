/* 
 * Rutas de la tabla Partida
 */

//Imports
const express = require("express");
const partidaController = require("../Controllers/Partida");
const router = express.Router();

//Obtener los datos del formulario
router.post("/agregarPartida", partidaController.postAgregarPartida);

module.exports = router;