window.addEventListener('load', function () {
    const formularioRegistro = document.getElementById('loginForm');

    formularioRegistro.addEventListener('submit', function (event) {
        
        event.preventDefault(); 
        
        const usuario = formularioRegistro.querySelector('input[type="text"]');
        const correo = formularioRegistro.querySelector('input[type="email"]');
        const clave = formularioRegistro.querySelector('input[type="password"]');

        let esValido = true;
        let mensajeError = ""; //Acumulador de mensajes de error, curioso.

        
        if (usuario.value.trim() === '' || correo.value.trim() === '' || clave.value.trim() === '') {
            mensajeError += "Todos los campos de registro son obligatorios.\n";
            esValido = false;
        }

        if (correo.value.trim() !== '' && !correo.value.includes("@")) {
            mensajeError += "Correo inválido. Debe contener un '@'.\n";
            esValido = false;
        }

        if (clave.value.trim() !== '' && clave.value.length < 6) {
            mensajeError += "La contraseña debe tener mínimo 6 caracteres.\n";
            esValido = false;
        }

        if (esValido) {
            alert("¡Registro exitoso! \nSerás redirigido a la página principal.");
            window.location.href = "principal.html";
        } else {
            alert("Errores de registro:\n" + mensajeError);
        }
    });
});

/** 
 * Reporte: Aqui las modificaciones del archivo, respecto a la version del codigo anterior.
 * 1. Se corrigio la asociacion del evento al formulario en lugar del boton.
 * 2. Se implemento la validacion para cada campo individualmente, asi salenlos mesnajes de error especificos. 
 * 3. Uso de acumulador de mensajes de error para mostrar todos los errores a la vez.
 * 4. Se cambio el mensaje de exito para que redirija a la pagina principal.
 * El proposito de todos estos cambios era permitirme redirigir al usuario a la pagina principal y las funciones de validacion.
 */