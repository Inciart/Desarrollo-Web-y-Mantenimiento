window.addEventListener("load", function () {
  const boton = document.getElementById("Mensaje");

  if (boton) {
    boton.addEventListener("click", function (event) {
      // Prevent form submission to show alert
      // event.preventDefault();

      const nombre = document.querySelector('.contact-form input[type="text"]');
      const email = document.querySelector('.contact-form input[type="email"]');
      const mensaje = document.querySelector(".contact-form textarea");

      if (
        nombre.value.trim() === "" ||
        email.value.trim() === "" ||
        mensaje.value.trim() === ""
      ) {
        alert("Todos los campos son requeridos");
        event.preventDefault(); // Prevent submit if invalid
      } else if (!email.value.includes("@")) {
        alert("El correo debe contener el signo @");
        event.preventDefault();
      } else {
        alert("informacion enviada");
      }
    });
  }

  //para registro, comprobando campos
  /* 
  
   const botonRegistro = document.getElementById("btnRegistro");

  if (botonRegistro) {
    botonRegistro.addEventListener("click", function (event) {
      const usuario = document.querySelector('.form-name input[type="text"]');
      const correo = document.querySelector(
        '.register-email input[type="email"]'
      );
      const clave = document.querySelector(
        '.register-clave  input[type="password"] '
      );
      const confirmClave = document.querySelector(
        '.remember-me input[type="password"]'
      );

      if (
        usuario.value.trim() === "" ||
        correo.value.trim() === "" ||
        clave.value.trim() === ""
      ) {
        alert("Todos los campos de registro son obligatorios");
        event.preventDefault();
      } else if (!correo.value.includes("@")) {
        alert("Correo inválido");
        event.preventDefault();
      } else if (clave.value.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres");
        event.preventDefault();
      } else {
        alert("Registro exitoso");
      }
    });
  }
  */
});

//loginForm