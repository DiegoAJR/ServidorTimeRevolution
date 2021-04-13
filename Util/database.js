//Configuracion de Sequelize
const Sequelize = require("sequelize");
const sequlize = new Sequelize("VideojuegoBD","sa","Password1234$", {
    dialect: "mssql",
    dialectOptions: {
        options: {
            useUTC: false,
            dataFirst: 1
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

//Exportando el objeto sequelize
module.exports = sequlize;