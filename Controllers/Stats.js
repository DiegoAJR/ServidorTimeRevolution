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
    let datosunity = req.body;
    Stats.create({
        tiempoBase: datosunity.tiempoBase,
        tiempoRecord: datosunity.tiempoRecord,
        nuevoRecord: datosunity.nuevoRecord,
        PartidaIdPartida: datosunity.PartidaIdPartida
    }).then(resultado=>res.send("Stat agregada"))
    .catch(error=>{
        //Alerta de nickname repetido o algo sale mal
        console.log(error);
        res.send("Surgió un error al agregar a la tabla Stats");
    });
};