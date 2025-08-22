// Animaciones
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-slide");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        // Animar barras de progreso
        const progressBars = entry.target.querySelectorAll(".progress");
        progressBars.forEach(bar => {
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
        });
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});