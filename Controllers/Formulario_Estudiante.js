/* Controladores de la tabla Formulario_Estudiante
 * Agrega usuarios
 * Muestra confirmación
 * Muestra registros
 * Muestra Login
 */

const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Formulario_Estudiante = sequelize.models.Formulario_Estudiante
const path = require("path");


exports.getAgregarUsuario = (req,res) =>{
    res.sendFile(path.join(__dirname,"..","views","Formularioeq3.html"));
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
        AreaSteamIdAreaSteam: area
    }).then(resultado=>res.redirect("/estudiante/confirmacion"))
    .catch(error=>{
        //Alerta de nickname repetido o algo sale mal
        res.redirect("/estudiante/agregarJugador");
    });
};

exports.getConfirmacion = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","Confirmacion.html"));
}

exports.getLogin = (req,res) => {
    res.sendFile(path.join(__dirname, "..","views","Login.html"));
}

exports.postLogin = (req,res) =>{
    let nickname = req.body.loginusuario;
    let contrasena = req.body.logincontrasena;
    let busqueda = "SELECT nickname FROM Formulario_Estudiante WHERE nickname = '"+nickname+ "' and contrasena = '"+contrasena +"'";
    sequelize.query(busqueda,{
        type: Sequelize.QueryTypes.SELECT
    }).then(alumnos=>{
        if(alumnos.length == 1){
            res.redirect("/estudiante/paginaPrincipal?nickname="+nickname);
        }else{
            //Alerta de usuario incorrecto
            res.redirect("/estudiante/login");
        }
    })
    
    .catch(err=>console.log(err))
}

exports.getPaginaPrincipal = (req,res) => {
    //Query todos los usuario
    let nickname = req.query.nickname
    let datalogros = []
    let datastats = []
    let logros = (`select j.puntaje, j.nombre, j.descripcion 
    from Formulario_Estudiante f, Jugador_Usuario u, Logro_Jugador l, Logro j 
    where l.JugadorUsuarioIdJugadorUsuario = u.idJugadorUsuario and u.FormularioEstudianteIdFormulario = f.idFormulario and j.idLogro = l.LogroIdLogro and f.nickname = '`+ nickname +`'`);
    let stats = (`select s.tiempoRecord, s.tiempoBase, p.nivel
    from Formulario_Estudiante f, Jugador_Usuario u, Partida p, [dbo].[Stats] s
    where p.JugadorUsuarioIdJugadorUsuario = u.idJugadorUsuario and s.PartidaIdPartida = p.idPartida and u.FormularioEstudianteIdFormulario = f.idFormulario and f.nickname = '`+nickname+`'`);
    sequelize.query(logros,{
        type: Sequelize.QueryTypes.SELECT
    }).then(registros=>{
            registros.forEach(registro=>{
                datalogros.push(registro);
            });
            }).then(statings =>{
                sequelize.query(stats,{
                    type: Sequelize.QueryTypes.SELECT
                }).then(registros=>{
                    registros.forEach(registro=>{
                        datastats.push(registro);
                    });
                    res.render("paginaPrincipal.html",{
                        datosstats: datastats,
                        nickname: nickname,
                        datoslogros: datalogros,
                    });
                });
        });
};