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
    require("../Models/Formulario_Estudiante"), 
    require("../Models/Area_Steam"),
    require("../Models/Jugador_Usuario"),
    require("../Models/Logro"),
    require("../Models/Logro_Jugador"),
    require("../Models/Partida"),
    require("../Models/Stats")
]

//Vincular el objeto de conexion con los modelos
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir relaciones
applyRelations(sequelize);


const Logro = sequelize.models.Logro

Logro.create({
    nombre: "Inicia la Revolucion",
    descripcion: "Terminaste el Nivel 1",
    puntaje: 100
}).then(
    Logro.create({
        nombre: "Un Nuevo Futuro",
        descripcion: "Terminaste el Nivel 2",
        puntaje: 100
    })
).then(
    Logro.create({
        nombre: "Desubriendo el Futuro",
        descripcion: "Terminaste el Nivel 3",
        puntaje: 100
    })
).then(
    Logro.create({
        nombre: "De Regreso a Casa",
        descripcion: "Terminaste el Nivel 4",
        puntaje: 100
    })
).then(
    Logro.create({
        nombre: "Viajero en el Tiempo",
        descripcion: "Terminaste Time Revolution",
        puntaje: 1000
    })
);

const Area_Steam = sequelize.models.Area_Steam;


Area_Steam.create({
    nombre: "Ciencia"
}).then(
    Area_Steam.create({
        nombre: "Tecnologia"
    })
).then(
    Area_Steam.create({
        nombre: "Ingenieria"
    })
).then(
    Area_Steam.create({
        nombre: "Matematicas"
    })
).then(
    Area_Steam.create({
        nombre: "Arte"
    })
).then(
    Area_Steam.create({
        nombre: "Ninguna"
    })
);


//Exportando el objeto sequelize
module.exports = sequelize;