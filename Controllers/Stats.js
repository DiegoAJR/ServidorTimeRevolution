/* 
 * Controlador de la tabla Stats
 */

//Imports
const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Stats = sequelize.models.Stats
const path = require("path");

//Agrega stats
exports.postAgregarStats = (req,res)=>{
    let datos0 = req.body.datosJSON;
    let datos = JSON.parse(datos0);

    let user = datos.usuario;
    let  = datos.nivel;
    let tiempillo = datos.tiempo;
    let busqueda = "SELECT idFormulario FROM Formulario_Estudiante WHERE nickname = '"+user+"'";
    sequelize.query(busqueda,{
        type: Sequelize.QueryTypes.SELECT
    }).then(resultado=>{
        let numId = parseInt(resultado[0].idFormulario);
        let numNivel2 = parseInt(numNivel);
        Partida.create({
            nivel: numNivel2,
            tiempo: tiempillo,
            JugadorUsuarioIdJugadorUsuario: numId
        })
    }).then(res.send("Exito"))
    .catch(error=>{
        console.log(error);
    });
};