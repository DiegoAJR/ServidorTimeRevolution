/* Controladores de la tabla Formulario_Estudiante
 * Agrega usuarios
 * Muestra confirmación
 * Muestra registros
 */

// Traer el modelo de la tabla usuario
const Formulario_Estudiante = require('../models/Formulario_Estudiante');
const path = require("path");


exports.getAgregarUsuario = (req,res) =>{
    res.sendFile(path.join(__dirname,'..','views','Formularioeq3.html'));
};

exports.getRegistros = (req,res)=>{
    //Query todos los usuario
    Formulario_Estudiante.findAll()
        .then(registros=>{
            var data =[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            res.render('tablero.html',{
                personas: data,
            });
        });
};

exports.postAgregarUsuario = (req,res)=>{
    console.log(req.body);
    let area = parseInt(req.body.areausuario);
    Formulario_Estudiante.create({
        nickname:req.body.nombreusuario,
        fechaNac: req.body.nacimientousuario,
        genero: req.body.generousuario,
        correoElectronico: req.body.correousuario,
        contrasena: req.body.passwordusuario,
        escolaridad: req.body.escolaridadusuario,
        gradoEscolar: req.body.gradousuario,
        estadoMex: req.body.estadousuario,
        areaSteam: area
    }).then(resultado=>console.log("Registro exitoso"))
    .catch(error=>console.log(error))
    res.redirect("/estudiante/confirmacion");
};

exports.getConfirmacion = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','Confirmacion.html'));
}