// Obtener los elementos necesarios
const appToggle = document.getElementById('appToggle');
const appBox = document.getElementById('appBox');

// Alternar la visibilidad del menú de aplicaciones al hacer clic en el icono ☰
appToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Evitar que el evento de clic se propague
  appBox.classList.toggle('show'); // Mostrar/ocultar el menú
});

// Cerrar el menú de aplicaciones al hacer clic fuera de él
document.addEventListener('click', (e) => {
  if (!appBox.contains(e.target) && e.target !== appToggle) {
    appBox.classList.remove('show'); // Ocultar el menú
  }
});
