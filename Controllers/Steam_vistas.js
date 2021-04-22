/* Controladores de la tabla Steam_vistas
 * Agrega usuarios
 * Muestra confirmación
 * Muestra registros
 * Muestra Login
 */

const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Formulario_Estudiante = sequelize.models.Formulario_Estudiante
const path = require("path");

exports.postLogin = (req,res) =>{
    let nickname = req.body.loginusuario;
    let contrasena = req.body.logincontrasena;
    if(nickname == "STEAM" && contrasena == "adminSTEAM") {
        res.redirect("/steam/registros");
    } else {
        res.redirect("/steam/loginsteam");
    }
}

exports.getLogin = (req,res) => {
    res.sendFile(path.join(__dirname, "..","views","loginsteam.html"));
}

exports.getRegistros = (req,res)=>{
    //Query todos los usuario
    Formulario_Estudiante.findAll()
        .then(registros=>{
            var data =[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            res.render("tablero.html",{
                personas: data,
            });
        });
};

exports.getDashboard = (req,res) => {
    res.sendFile(path.join(__dirname, "..","views","Dashboard.html"));
}