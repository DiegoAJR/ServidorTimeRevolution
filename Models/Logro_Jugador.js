// Definición del modelo de la tabla Area_Steam

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