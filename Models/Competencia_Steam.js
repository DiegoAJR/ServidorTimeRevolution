// Definición del modelo de la tabla Formulario_Estudiante

const Sequelize = require("sequelize");

const Competencia_Steam = (sequelize) => {
    sequelize.define("Competencia_Steam",{
        idCompeSteam: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
}

module.exports = Competencia_Steam;