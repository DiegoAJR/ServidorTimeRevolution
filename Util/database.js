//Configuracion de Sequelize para conexión de BD

const Sequelize = require("sequelize");
const sequelize = new Sequelize("TimeRevolutionBD","sa","Password1234$", {
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
module.exports = sequelize;