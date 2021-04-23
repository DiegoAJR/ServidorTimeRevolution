/*
 * Código Javascript de Formulario HTML.
 */

// Función obtenida de https://getbootstrap.com/docs/5.0/forms/validation/ pagina de bootstrap. 
// Sirve para verificar que los campos requeridos sí son llenados.
// Si después de apretar submit no estan llenos muestra animacion de faltante e impide el envio de datos.
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
        }, false)
    })
})()


