/* 
 * Rutas de la tabla Formulario_Estudiante
 */

const express = require("express");
const formulario_estudianteController = require("../Controllers/Formulario_Estudiante");
const router = express.Router();

//Muestra el formulario
router.get("/agregarJugador", formulario_estudianteController.getAgregarUsuario);

//Obtener los datos del formulario
router.post("/agregarJugador", formulario_estudianteController.postAgregarUsuario);

//Mostrar al usuario el resultado de la transaccion
router.get("/confirmacion", formulario_estudianteController.getConfirmacion);

//Muestra la página de Login
router.get("/login", formulario_estudianteController.getLogin);

//Obtener los datos de LOGIN
router.post("/login",formulario_estudianteController.postLogin);

// Mostrar la página principal
router.get('/paginaPrincipal',formulario_estudianteController.getPaginaPrincipal);


module.exports = router;