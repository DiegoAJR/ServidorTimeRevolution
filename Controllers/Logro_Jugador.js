/* 
 * Controlador de la tabla Logro_Jugador
 */

//Imports
const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Logro_Jugador = sequelize.models.Logro_Jugador;
const path = require("path");

//Agrega Logro_Jugador
exports.postAgregarLogro_Jugador = (req,res)=>{
    let datos0 = req.body.datosJSON;
    let datos = JSON.parse(datos0);

    let user = datos.usuario;
    let numLogro = datos.logro;
    let busqueda = "SELECT idFormulario FROM Formulario_Estudiante WHERE nickname = '"+user+"'";
    sequelize.query(busqueda,{
        type: Sequelize.QueryTypes.SELECT
    }).then(resultado=>{
        let numId = parseInt(resultado[0].idFormulario);
        let numLogro2 = parseInt(numLogro)
        Logro_Jugador.create({
            LogroIdLogro: numLogro2,
            JugadorUsuarioIdJugadorUsuario: numId
        })
    }).then(res.send("Exito"))
    .catch(error=>{
        console.log(error);
    });
};