const express = require("express");
const juegoController = require("../Controllers/Juego");
const router = express.Router();


//Obtener la pagina de Bienvenida
router.get("/timeRevolution", juegoController.getTimeRevolution);

router.get("/juegoCompleto",juegoController.getJuegoEjecutable);

module.exports = router;