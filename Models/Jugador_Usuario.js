// Definición del modelo de la tabla Area_Steam

const Sequelize = require("sequelize");

const Jugador_Usuario = (sequelize) => {
    sequelize.define("Jugador_Usuario",{
        idJugadorUsuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    });
}

module.exports = Jugador_Usuario;