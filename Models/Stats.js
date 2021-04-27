/*
 * Definicion de la tabla Stats
 */
const Sequelize = require("sequelize");

const Stats = (sequelize) => {
    sequelize.define("Stats",{
        idStat: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        intentosCuestionario1: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        intentosCuestionario2: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        intentosCuestionario3: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        tiempoCoreDrop: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        tiempoEnergySnake: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    });
}

module.exports = Stats;