/*
 * Definicion de la tabla Logro_Jugador
 */

const Sequelize = require("sequelize");

const Logro_Jugador = (sequelize) => {
    sequelize.define("Logro_Jugador",{
        idLogroJugador: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    });
}

module.exports = Logro_Jugador;