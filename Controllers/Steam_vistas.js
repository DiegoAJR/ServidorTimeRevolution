/* 
 * Controladores del usuario de STEAM
 */

//Imports
const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Formulario_Estudiante = sequelize.models.Formulario_Estudiante
const path = require("path");

//Verifica que el login de STEAM sea correcto
exports.postLogin = (req,res) =>{
    let nickname = req.body.loginusuario;
    let contrasena = req.body.logincontrasena;
    if(nickname == "STEAM" && contrasena == "adminSTEAM") {
        res.redirect("/steam/registros");
    } else {
        res.redirect("/steam/loginsteam");
    }
}

//Manda el archivo de login especifico de STEAM
exports.getLogin = (req,res) => {
    res.sendFile(path.join(__dirname, "..","views","loginsteam.html"));
}

//Checa la tabla de Formulario_Estudiante y muestra todos los registros en el tablero
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

//Envia el archivo de dashboard
exports.getDashboard = (req,res) => {
    res.sendFile(path.join(__dirname, "..","views","Dashboard.html"));
}