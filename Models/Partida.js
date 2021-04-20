// Definición del modelo de la tabla Area_Steam

const Sequelize = require("sequelize");

const Partida = (sequelize) => {
    sequelize.define("Partida",{
        idPartida: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nivel: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });
}

module.exports = Partida;