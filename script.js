
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, header, footer");
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
  });

  const fadeIn = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.style.transition = "all 0.6s ease-out";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  fadeIn();
  window.addEventListener("scroll", fadeIn);
});
