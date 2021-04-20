//Configuracion de Sequelize para conexión de BD

const Sequelize = require("sequelize");
const {applyRelations} = require("./relations")

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

//Cargar modelos
const modelDefiners = [
    require("../models/Formulario_Estudiante"), 
    require("../models/Area_Steam"),
    require("../models/Jugador_Usuario"),
    require("../models/Logro"),
    require("../models/Logro_Jugador"),
    require("../models/Partida"),
    require("../models/Stats")
]

//Vincular el objeto de conexion con los modelos
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir relaciones
applyRelations(sequelize);

//Exportando el objeto sequelize
module.exports = sequelize;