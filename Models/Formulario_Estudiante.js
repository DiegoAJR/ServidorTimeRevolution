// Definición del modelo de la tabla Formulario_Estudiante

const Sequelize = require("sequelize");

const Formulario_Estudiante = (sequelize) => {
    sequelize.define("Formulario_Estudiante",{
        idFormulario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nickname: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true
        },
        fechaNac: {
            type: Sequelize.DATEONLY,
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
        /*
        areaSteam: {
            type: Sequelize.INTEGER,
            allowNull: false
            // references: {
            //     model: Area_Steam,
            //     key: idArea
            // },
            // allowNull: false
        }
        */
    });
}

module.exports = Formulario_Estudiante;