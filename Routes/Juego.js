/* 
 * Rutas de la tabla Juego
 */

//Imports
const express = require("express");
const juegoController = require("../Controllers/Juego");
const router = express.Router();


//Obtener la pagina de Bienvenida
router.get("/timeRevolution", juegoController.getTimeRevolution);


module.exports = router;