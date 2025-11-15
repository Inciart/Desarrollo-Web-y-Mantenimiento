document.getElementById('hamburgerBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburgerBtn');

    if (sidebar.classList.contains('open') && 
    !sidebar.contains(e.target) && 
        !hamburger.contains(e.target)) {
        sidebar.classList.remove('open');
    }
    });

    // Evitar que clic en menú cierre
    document.getElementById('sidebar').addEventListener('click', function(e) {
    e.stopPropagation();
    });

    // Submenús desplegables
    function toggleSubmenu(e, id) {
    e.preventDefault();
    e.stopPropagation();
    
    const submenu = document.getElementById(id);
    const toggle = e.target;
    
    submenu.classList.toggle('show');
    toggle.classList.toggle('open');
    }