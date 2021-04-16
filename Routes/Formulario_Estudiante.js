/* Rutas de la tabla Formulario_Estudiante
 * Agrega usuarios
 * Muestra confirmación
 * Muestra registros
 */

const express = require("express");
const formulario_estudianteController = require("../controllers/Formulario_Estudiante");
const router = express.Router();

//Muestra el formulario
router.get("/agregarJugador", formulario_estudianteController.getAgregarUsuario);

//Obtener los datos del formulario
router.post("/agregarJugador", formulario_estudianteController.postAgregarUsuario);

//Mostrar al usuario el resultado de la transaccion
router.get("/confirmacion", formulario_estudianteController.getConfirmacion);

//Mostrar los registros de la base de datos
router.get('/registros' , formulario_estudianteController.getRegistros);


module.exports = router;