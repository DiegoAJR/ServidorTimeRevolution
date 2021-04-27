/* 
 * Controladores de la tabla Partida
 */

//Imports
const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Partida = sequelize.models.Partida
const path = require("path");

//Agrega partida
exports.postAgregarPartida = (req,res)=>{
    let datos0 = req.body.datosJSON;
    let datos = JSON.parse(datos0);

    let user = datos.usuario;
    let numNivel = datos.nivel;
    let tiempillo = datos.tiempo;
    let busqueda = "SELECT idFormulario FROM Formulario_Estudiante WHERE nickname = '"+user+"'";
    sequelize.query(busqueda,{
        type: Sequelize.QueryTypes.SELECT
    }).then(resultado=>{
        let numId = parseInt(resultado[0].idFormulario);
        let numNivel2 = parseInt(numNivel);
        let tiempoF = parseInt(tiempillo);
        Partida.create({
            nivel: numNivel2,
            tiempo: tiempoF,
            JugadorUsuarioIdJugadorUsuario: numId
        })
    }).then(res.send("Exito"))
    .catch(error=>{
        console.log(error);
    });
};