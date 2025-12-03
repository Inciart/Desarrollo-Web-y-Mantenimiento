window.addEventListener("load", function () {
  const boton = document.getElementById("Mensaje");

  if (boton) {
    boton.addEventListener("click", function (event) {
      // Prevent form submission to show alert
      // event.preventDefault(); 

      const nombre = document.querySelector('.contact-form input[type="text"]');
      const email = document.querySelector('.contact-form input[type="email"]');
      const mensaje = document.querySelector('.contact-form textarea');

      if (nombre.value.trim() === "" || email.value.trim() === "" || mensaje.value.trim() === "") {
        alert("Campos vacios");
        event.preventDefault(); // Prevent submit if invalid
      } else {
        alert("¡Mensaje enviado!");
      }
    });
  }
});