// Traer el modelo de la tabla usuario
const Formulario_Estudiante = require("../models/Jugador");
const path = require("path");
const { type } = require("os");

exports.postAgregarUsuario = (req,res)=>{
    let datos0 = req.body.datosJSON;
    let datos = JSON.parse(datos0);

    Jugador.create({
        Usuario: datos.usuario,
        Password: datos.password,
        HoraInicio: datos.horaInicio
    }).then(resultado => console.log("Registro exitoso"))
      .catch(error => console.log(error));
    res.send("Registrado");
};

exports.postActualizarUsuario = (req,res) => {
    console.log(req);
    let datos0 = req.body.datosJSON;
    let datos = JSON.parse(datos0);

    Jugador.findByPk(datos.usuario)
        .then(usuario0 => {
            usuario0.HoraFinal = datos.horaFinal
            return usuario0 && usuario0.save();
        })
        .then(resultado => {
            console.log("Usuario actualizado exitosamente");
            console.log(resultado);
        })
        .catch(error => console.log(error))
}