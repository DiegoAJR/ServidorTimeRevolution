const express = require("express");
const area_steamController = require("../controllers/Area_Steam");
const router = express.Router();


//Muestra la página de Login
router.get("/login", area_steamController.getLogin);

//Obtener los datos de LOGIN
router.post("/login",area_steamController.postLogin);

//Mostrar los registros de la base de datos
router.get('/registros', area_steamController.getRegistros);


module.exports = router;