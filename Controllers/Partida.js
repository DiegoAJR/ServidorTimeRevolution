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
    let datosunity = req.body;
    Partida.create({
        nivel: datosunity.nivel,
        JugadorUsuarioIdJugadorUsuario: datosunity.JugadorUsuarioIdJugadorUsuario
    }).then(resultado=>res.send("Partida agregada"))
    .catch(error=>{
        //Alerta de nickname repetido o algo sale mal
        res.send("Surgió un error al agregar a la tabla Stats");
    });
};