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
    let campo = datos.campo;
    let stat = datos.stat;
    let busqueda = "SELECT idFormulario FROM Formulario_Estudiante WHERE nickname = '"+user+"'";
    sequelize.query(busqueda,{
        type: Sequelize.QueryTypes.SELECT
    }).then(resultado=>{
        let numId = parseInt(resultado[0].idFormulario);
        let stats = parseInt(stat);
        if(campo == "intentosCuestionario1"){
            Stats.findByPk(numId)
            .then(registro => {
                registro.intentosCuestionario1 = stats
                return registro && registro.save();
        })}else if(campo == "intentosCuestionario2"){
            Stats.findByPk(numId)
            .then(registro => {
                registro.intentosCuestionario2 = stats
                return registro && registro.save();
        })}else if(campo == "intentosCuestionario3"){
            Stats.findByPk(numId)
            .then(registro => {
                registro.intentosCuestionario3 = stats
                return registro && registro.save();
        })}else if(campo == "tiempoEnergySnake"){
            Stats.findByPk(numId)
            .then(registro => {
                if(parseInt(registro.tiempoEnergySnake) > stats) {
                registro.tiempoEnergySnake = stats
                return registro && registro.save();
                } else if(parseInt(registro.tiempoEnergySnake) < stats) {
                    //pass
                }
        })}else if(campo == "tiempoCoreDrop"){
            Stats.findByPk(numId)
            .then(registro => {
                if(parseInt(registro.tiempoCoreDrop) > stats) {
                    registro.tiempoCoreDrop = stats
                    return registro && registro.save();
                    } else if(parseInt(registro.tiempoCoreDrop) < stats) {
                        //pass
                    }
                registro.tiempoCoreDrop = stats
                return registro && registro.save();
        })}
        }).then(res.send("Nueva Stat Holy Molly"))
    .catch(error=>{
        console.log(error);
    });
};