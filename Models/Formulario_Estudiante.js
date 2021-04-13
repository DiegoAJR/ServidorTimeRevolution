const Sequelize = require("sequelize");
//Traer el objeto sequelize
const sequelize = require("../util/database");
//Definicion del modelo

const Formulario_Estudiante = sequelize.define("Formulario_Estudiante",{
    ID_formulario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nickname: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    fecha_nac: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    genero: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    correo_Electronico: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    contrasena: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    estadoMex: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    escolaridad: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    correo_Electronico: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    carrera_steam: {
        type: Sequelize.INTEGER,
        /*references: {
            model: Estudiante_Carrera
            key: ID_carrera
        }*/
        allowNull: false
    }
});

module.exports = Formulario_Estudiante;