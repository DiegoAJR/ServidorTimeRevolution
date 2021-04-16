/*
Formulario Javascript Equipo 3: Time revolution para STEAM
Código realizado por:
Diego Alejandro Juárez Ruiz - A01379566
Roberto Valdez Jasso - A01746863 
Luis Enrique Zamarripa Marín - A01379918
Melissa Garduño Ruiz - A01748945
Renata de Luna Flores - A01750484
Ultima modificación: 09/03/2021
- Código Javascript de Tablero HTML.
*/

// Función que muestra mas registros de los datos del tablero.
// Modifica el HTML interno de la tabla.
function cambiarDatos()
{
    let tabla = document.getElementById("tabla")
    tabla.innerHTML=`
    <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Edad</th>
            <th>Género</th>
            <th>Área de interés</th>
            <th>Tiempo Jugado</th>
            <th>Última vez en el juego</th>
            <th>Niveles completados</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="row">07</td>
            <td>12</td>
            <td>M</td>
            <td>Humanidades</td>
            <td>01:15:30</td>
            <td>2021-02-28</td>
            <td>1</td>
        </tr>
        <tr>
            <td scope="row">08</td>
            <td>14</td>
            <td>F</td>
            <td>Negocios</td>
            <td>00:10:33</td>
            <td>2021-03-09</td>
            <td>0</td>
        </tr>
        <tr>
            <td scope="row">09</td>
            <td>17</td>
            <td>F</td>
            <td>Negocios</td>
            <td>02:22:21</td>
            <td>2021-02-18</td>
            <td>2</td>
        </tr>
        <tr>
            <td scope="row">10</td>
            <td>16</td>
            <td>M</td>
            <td>Salud</td>
            <td>03:13:53</td>
            <td>2021-03-03</td>
            <td>3</td>
        </tr>
        <tr>
            <td scope="row">11</td>
            <td>16</td>
            <td>F</td>
            <td>Ingeniería</td>
            <td>06:33:23</td>
            <td>2021-03-04</td>
            <td>3</td>
        </tr>
        <tr>
            <td scope="row">12</td>
            <td>15</td>
            <td>M</td>
            <td>Ingeniería</td>
            <td>05:13:25</td>
            <td>2021-03-09</td>
            <td>3</td>
        </tr>
    </tbody>
    `
}

// Función que regresa a los registros originales de los datos del tablero.
// Modifica el HTML de la tabla.
function regresarDatos() 
{
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = `
    <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Edad</th>
            <th>Género</th>
            <th>Área de interés</th>
            <th>Tiempo Jugado</th>
            <th>Última vez en el juego</th>
            <th>Niveles completados</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="row">01</td>
            <td>15</td>
            <td>F</td>
            <td>Humanidades</td>
            <td>02:14:33</td>
            <td>2021-03-07</td>
            <td>2</td>
        </tr>
        <tr>
            <td scope="row">02</td>
            <td>18</td>
            <td>M</td>
            <td>Negocios</td>
            <td>04:01:55</td>
            <td>2021-03-05</td>
            <td>3</td>
        </tr>
        <tr>
            <td scope="row">03</td>
            <td>13</td>
            <td>M</td>
            <td>Salud</td>
            <td>00:20:21</td>
            <td>2021-03-01</td>
            <td>1</td>
        </tr>
        <tr>
            <td scope="row">04</td>
            <td>19</td>
            <td>F</td>
            <td>Ingeniería</td>
            <td>06:10:54</td>
            <td>2021-03-07</td>
            <td>3</td>
        </tr>
        <tr>
            <td scope="row">05</td>
            <td>13</td>
            <td>M</td>
            <td>Ingeniería</td>
            <td>07:44:33</td>
            <td>2021-03-02</td>
            <td>3</td>
        </tr>
        <tr>
            <td scope="row">06</td>
            <td>14</td>
            <td>M</td>
            <td>Humanidades</td>
            <td>05:10:23</td>
            <td>2021-03-03</td>
            <td>2</td>
        </tr>
    </tbody>
    `
}