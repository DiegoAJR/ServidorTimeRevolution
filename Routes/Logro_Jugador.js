/* 
 * Rutas de la tabla Logro_Jugador
 */

//Imports
const express = require("express");
const logro_jugadorController = require("../Controllers/Logro_Jugador");
const router = express.Router();

//Obtener los datos del formulario
router.post("/agregarLogroJugador", logro_jugadorController.postAgregarLogro_Jugador);

module.exports = router;