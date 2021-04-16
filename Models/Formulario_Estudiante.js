// Definición del modelo de la tabla Formulario_Estudiante

const Sequelize = require("sequelize");
//Traer el objeto sequelize
const sequelize = require("../util/database");

//Definicion del modelo
const Formulario_Estudiante = sequelize.define("Formulario_Estudiante",{
    idFormulario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nickname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    fechaNac: {
        type: Sequelize.DATE,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    correoElectronico: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    contrasena: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    escolaridad: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    gradoEscolar: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    estadoMex: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    areaSteam: {
        type: Sequelize.INTEGER,
        allowNull: false
        // references: {
        //     model: Area_Steam,
        //     key: idArea
        // },
        // allowNull: false
    }
});

module.exports = Formulario_Estudiante;