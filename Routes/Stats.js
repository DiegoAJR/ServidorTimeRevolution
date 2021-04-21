const express = require("express");
const statsController = require("../Controllers/Stats");
const router = express.Router();

//Obtener los datos del formulario
router.post("/agregarStats", statsController.postAgregarStats);

module.exports = router;
