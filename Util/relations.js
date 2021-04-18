//Funcion que recibe el objeto de conexion
function applyRelations(sequelize) {
    console.log(sequelize.models);
    const Formulario_Estudiante = sequelize.models.Formulario_Estudiante;
    const Area_Steam = sequelize.models.Area_Steam;
    const Competencia_Steam = sequelize.models.Competencia_Steam;

    //Relacion 1:N
    //Un estudiante tiene un area
    Formulario_Estudiante.belongsTo(Area_Steam);
    //Un area puede tener varios estudiantes
    Area_Steam.hasMany(Formulario_Estudiante);

    //Relacion N:N
    //Un area puede tener muchas competencias
    Area_Steam.belongsToMany(Competencia_Steam, {through: "Competencia_Area"});
    //Una competencia puede tener muchas areas
    Competencia_Steam.belongsToMany(Area_Steam, {through: "Competencia_Area"});

}

module.exports = {applyRelations};