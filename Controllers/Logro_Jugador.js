/* Controladores de la tabla Steam_vistas
 * Agrega stats del usuario
 */
const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Logro_Jugador = sequelize.models.Logro_Jugador;
const path = require("path");

exports.postAgregarLogro_Jugador = (req,res)=>{
    let datosunity = req.body;
    Logro_Jugador.create({
        JugadorUsuarioIdJugadorUsuario: datosunity.JugadorUsuarioIdJugadorUsuario,
        LogroIdLogro: datosunity.LogroIdLogro
    }).then(resultado=>res.send("Logro_Jugador agregado"))
    .catch(error=>{
        //Alerta de nickname repetido o algo sale mal
        res.send("Surgió un error al agregar a la tabla Logro_Jugador");
    });
};