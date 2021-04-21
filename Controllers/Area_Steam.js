/* Controladores de la tabla Area_Steam
 * Agrega usuarios
 * Muestra confirmación
 * Muestra registros
 * Muestra Login
 */

const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Area_Steam = sequelize.models.Area_Steam
const path = require("path");

exports.postLogin = (req,res) =>{
    let nickname = req.body.loginusuario;
    let contrasena = req.body.logincontrasena;
    let busqueda = "SELECT nickname FROM Formulario_Estudiante WHERE nickname = '"+nickname+ "' and contrasena = '"+contrasena +"'";
    sequelize.query(busqueda,{
        type: Sequelize.QueryTypes.SELECT
    }).then(alumnos=>{
        if(alumnos.length == 1){
            res.redirect("/steam/registros");
        }else{
            //Alerta de usuario incorrecto
            res.redirect("/steam/login");
        }
    })
    
    .catch(err=>console.log(err))
}

exports.getLogin = (req,res) => {
    res.sendFile(path.join(__dirname, "..","views","Login.html"));
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