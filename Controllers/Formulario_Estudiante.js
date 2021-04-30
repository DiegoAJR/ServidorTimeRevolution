/* 
 * Controladores de la tabla Formulario_Estudiante
 */

//Imports
const Sequelize = require("sequelize");
const sequelize = require("../Util/database");
const Formulario_Estudiante = sequelize.models.Formulario_Estudiante;
const Jugador_Usuario = sequelize.models.Jugador_Usuario;
const Stats = sequelize.models.Stats
const path = require("path");

//Envia el archivo del formulario
exports.getAgregarUsuario = (req,res) =>{
    if(req.query.error == "true") {
        let warning = [1]
        res.render("Formularioeq3.html", {
            warnings: warning
        })
    } else {
        let warning = []
        res.render("Formularioeq3.html", {
            warnings: warning
        });
    }
};

//Agrega usuario
exports.postAgregarUsuario = (req,res)=>{
    let busqueda = "SELECT idFormulario FROM Formulario_Estudiante WHERE nickname = '"+req.body.nombreusuario+ "'";
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
    }).then(
        sequelize.query(busqueda,{
            type: Sequelize.QueryTypes.SELECT
    })).then(numero=>{
        let valor = parseInt(numero.dataValues.idFormulario);
        Jugador_Usuario.create({
            FormularioEstudianteIdFormulario: valor
        });
        Stats.create({
            JugadorUsuarioIdJugadorUsuario: valor
        });
    }).then(resultado=>res.redirect("/estudiante/confirmacion"))
    .catch(error=>{
        //Alerta de nickname repetido o algo sale mal
        console.log(error);
        res.redirect("/estudiante/agregarJugador?error=true");
    });
};

//Envia archivo de confirmacion
exports.getConfirmacion = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","Confirmacion.html"));
}

//Envia archivo de acuerdo de privacidad
exports.getAcuerdo = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","acuerdopriv.html"));
}

//Envia archivo de login
exports.getLogin = (req,res) => {
    if(req.query.error == "true") {
        let warning = [1]
        res.render("Login.html", {
            warnings: warning
        })
    } else {
        let warning = []
        res.render("Login.html", {
            warnings: warning
        });
    }
}

//Checa los datos de login con la base de datos
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
            res.redirect("/estudiante/login?error=true");
        }
    })
    
    .catch(err=>console.log(err))
}

//Hace queries en la base de datos y hace render de la pagina principal
exports.getPaginaPrincipal = (req,res) => {
    //Query todos los usuario
    let nickname = req.query.nickname
    let datalogros = []
    let datastats = []
    let logros = (`select j.puntaje, j.nombre, j.descripcion 
    from Formulario_Estudiante f, Jugador_Usuario u, Logro_Jugador l, Logro j 
    where l.JugadorUsuarioIdJugadorUsuario = u.idJugadorUsuario and u.FormularioEstudianteIdFormulario = f.idFormulario and j.idLogro = l.LogroIdLogro and f.nickname = '`+ nickname +`'`);
    let stats = (`select s.intentosCuestionario1, s.intentosCuestionario2, s.intentosCuestionario3, s.tiempoCoreDrop, s.tiempoEnergySnake
    from Formulario_Estudiante f, Jugador_Usuario u, [dbo].[Stats] s
    where s.idStat = u.idJugadorUsuario and u.FormularioEstudianteIdFormulario = f.idFormulario and f.nickname = '`+nickname+`'`);
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

exports.postVerificarLoginUnity = (req,res) => {
    let datos0 = req.body.datosJSON;
    let datos = JSON.parse(datos0);

    let user = datos.usuario;
    let password = datos.contrasena;
    let busqueda = "SELECT nickname FROM Formulario_Estudiante WHERE nickname = '"+user+ "' and contrasena = '"+password+"'";
    sequelize.query(busqueda,{
        type: Sequelize.QueryTypes.SELECT
    }).then(alumnos=>{
        if(alumnos.length == 1){
            res.send("Acceso concedido");
        }else{
            res.send("Acceso denegado. Usuario o contraseña incorrectos");
        }
    })
    
    .catch(err=>console.log(err))
}