// Archivo index del servidor del juego Time Revolution

// Biblioteca para definir lo que es un JSON
const bodyParser = require('body-parser');
// Biblioteca para generar rutas de acuerdo al OS
const path = require('path');
// Importa la biblioteca express para la creacion de servidores
const express = require('express');

// Traer la conexion de la base de datos
const sequelize = require("./Util/database");
// Traer las rutas
const estudianteRoutes = require("./Routes/Formulario_Estudiante");
const steamRoutes = require("./Routes/Steam_vistas");
const partidaRoutes = require("./Routes/Partida");
const statsRoutes = require("./Routes/Stats");
const logroRoutes = require("./Routes/Logro_Jugador");

// Crear el servidor
const app = express();

// Establecer un middleware para configurar la ubicacion de nuestros elementos publicos
app.use(express.static(path.join(__dirname,'Public')));

// Middleware para configurar la definicion de un JSON
app.use(bodyParser.json());
// Middleware para configurar la recepcion de formularios
app.use(bodyParser.urlencoded({extended:true}));

app.use("/estudiante", estudianteRoutes);
app.use("/steam", steamRoutes);
app.use("/partida", partidaRoutes);
app.use("/stats", statsRoutes);
app.use("/logros", logroRoutes);

//Configurar la visualización de plantillas
app.engine('html',require('ejs').renderFile);
app.set('Views engine','ejs');


let puerto = 8080;

sequelize.sync({force:true})
    .then(resultado => {
        console.log("Conexion exitosa");
        // Lanza el servidor para escuchar peticiones
        app.listen(puerto,()=>console.log("Servidor en linea en puerto 8080"));
    })
    .catch(error => console.log(error));