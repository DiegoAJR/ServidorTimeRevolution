// Definición del modelo de la tabla Area_Steam

const Sequelize = require("sequelize");

const Stats = (sequelize) => {
    sequelize.define("Stats",{
        idStat: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        tiempoBase: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        tiempoRecord: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        nuevoRecord: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
}

module.exports = Stats;