
let contador = 0;
const contadorElemento = document.getElementById('contador-carrito');
const botonesAgregar = document.querySelectorAll('.boton-carrito');
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', function(e) {
        e.preventDefault();
        contador++;
        contadorElemento.textContent = contador;
        contadorElemento.classList.add('actualizado');
        setTimeout(() => contadorElemento.classList.remove('actualizado'), 300);
    });
});
// === MENÚ DEL USUARIO ===
const btnUsuario = document.getElementById('btn-usuario');
const menuUsuario = document.getElementById('menu-usuario');
btnUsuario.addEventListener('click', function(e) {
    e.preventDefault();
    menuUsuario.classList.toggle('mostrar');
});
document.addEventListener('click', function(e) {
    if (!btnUsuario.contains(e.target) && !menuUsuario.contains(e.target)) {
        menuUsuario.classList.remove('mostrar');
    }
});
