// Scroll suave al hacer click en el menú
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
}

// Si querés que los links del menú usen scroll suave:
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const id = href.replace("#", "");
    scrollToSection(id);
  });
});
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.page-section');

  secciones.forEach(sec => {
    sec.style.display = 'none';
  });

  const seleccionada = document.getElementById(id);
  if (seleccionada) {
    seleccionada.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

// Al cargar la página, mostramos solo INICIO
document.addEventListener('DOMContentLoaded', () => {
  mostrarSeccion('inicio');
});
