/* ===== MENSAJE POPUP ===== */
function showSuccessMessage() {
  const popup = document.getElementById("form-success");
  if (!popup) return;

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 4000);
}

/* ===== FORMULARIO ===== */
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Evito el refresh

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        showSuccessMessage();
        form.reset();
      } else {
        console.error("Error al enviar:", response.statusText);
        alert("Hubo un problema al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de conexión. Intentá nuevamente.");
    }
  });
}

/* ===== MENÚ HAMBURGUESA ===== */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* ===== TRENSICION ENTRE SECCIONES ===== */
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".page-section");

  secciones.forEach((sec) => {
    sec.style.display = "none";
  });

  const seleccionada = document.getElementById(id);
  if (seleccionada) {
    seleccionada.style.display = "block";
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}
