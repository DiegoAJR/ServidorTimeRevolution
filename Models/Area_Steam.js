/*
 * Definicion de la tabla Area_Steam
 */

const Sequelize = require("sequelize");

const Area_Steam = (sequelize) => {
    sequelize.define("Area_Steam",{
        idAreaSteam: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
    });
}

module.exports = Area_Steam;