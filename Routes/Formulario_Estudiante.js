const express = require("express");
const formulario_estudianteController = require("../controllers/Formulario_Estudiante");
const router = express.Router();
const path = require('path');

//Muestra el formulario
router.get("/agregarUsuario", formulario_estudianteController.getAgregarUsuario);

//Obtener los datos del formulario
router.post("/agregarUsuario", formulario_estudianteController.postAgregarUsuario);

//Mostrar al usuario el resultado de la transaccion
router.get("/confirmacion", formulario_estudianteController.getConfirmacion);

module.exports = router;