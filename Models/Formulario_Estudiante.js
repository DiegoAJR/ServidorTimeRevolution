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
    fecha_nac: {
        type: Sequelize.DATE,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING(10),
        allowNull: false //HACER CAMBIO EN HTML DE OBLIGATORIO *
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
    carreraSteam: {
        type: Sequelize.INTEGER,
        references: {
            model: Estudiante_Carrera,
            key: idCarrera
        },
        allowNull: false
    }
});

module.exports = Formulario_Estudiante;