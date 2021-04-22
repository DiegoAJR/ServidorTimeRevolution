const express = require("express");
const steam_vistasController = require("../Controllers/Steam_vistas");
const router = express.Router();


//Muestra la página de Login
router.get("/loginsteam", steam_vistasController.getLogin);

//Obtener los datos de LOGIN
router.post("/loginsteam",steam_vistasController.postLogin);

//Mostrar los registros de la base de datos
router.get('/registros', steam_vistasController.getRegistros);

//Mostrar el dashboard de Tableu
router.get('/dashboard', steam_vistasController.getDashboard);


module.exports = router;