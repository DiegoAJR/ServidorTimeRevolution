const Sequelize = require("sequelize");

const Competencia_Area = (sequelize) => {
    sequelize.define("Competencia_Area", {
        idCompArea: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
    })
}

module.exports = Competencia_Area;