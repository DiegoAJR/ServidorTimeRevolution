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
            console.log(registros)
            var data =[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            res.render('ejemploEJS.html',{
                personas: data,
                sesion:"Autorizado",
                hora: "14:00"
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
    res.redirect("/estudiante/registros");
};

exports.getConfirmacion = (req,res)=>{
    res.send("Registro exitoso");
}