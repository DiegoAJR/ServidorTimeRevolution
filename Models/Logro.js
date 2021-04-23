/*
 * Definicion de la tabla Logro
 */
const Sequelize = require("sequelize");

const Logro = (sequelize) => {
    sequelize.define("Logro",{
        idLogro: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        puntaje: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
}

module.exports = Logro;