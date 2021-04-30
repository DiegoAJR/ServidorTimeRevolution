/* 
 * Especificacion de las relaciones
 */

//Imports
const Sequelize = require("sequelize");

//Funcion que recibe el objeto de conexion
function applyRelations(sequelize) {
    console.log(sequelize.models);
    const Formulario_Estudiante = sequelize.models.Formulario_Estudiante;
    const Area_Steam = sequelize.models.Area_Steam;
    const Jugador_Usuario = sequelize.models.Jugador_Usuario;
    const Logro = sequelize.models.Logro;
    const Logro_Jugador = sequelize.models.Logro_Jugador;
    const Partida = sequelize.models.Partida;
    const Stats = sequelize.models.Stats;

    Formulario_Estudiante.belongsTo(Area_Steam);
    Area_Steam.hasMany(Formulario_Estudiante);

    Jugador_Usuario.belongsTo(Formulario_Estudiante);

    Jugador_Usuario.belongsToMany(Logro, {through: "Logro_Jugador"});
    Logro.belongsToMany(Jugador_Usuario, {through: "Logro_Jugador"});

    Partida.belongsTo(Jugador_Usuario);
    Jugador_Usuario.hasMany(Partida);

    Stats.belongsTo(Jugador_Usuario);
}

module.exports = {applyRelations};