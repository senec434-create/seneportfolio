```javascript
// Génération d'un ciel étoilé animé
const canvas = document.getElementById("stars");
const ctx = canvas ? canvas.getContext("2d") : null;
let stars = [];
let animationFrame;

function resizeCanvas() {
  if (!canvas || !ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  stars = Array.from(
    { length: Math.min(180, Math.floor(window.innerWidth / 7)) },
    () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.3 + 0.2,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.15 + 0.025
    })
  );
}

function drawStars() {
  if (!ctx || !canvas) return;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (const star of stars) {
    star.y -= star.speed;

    if (star.y < 0) {
      star.y = window.innerHeight;
      star.x = Math.random() * window.innerWidth;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(205, 224, 255, ${star.alpha})`;
    ctx.fill();
  }

  animationFrame = requestAnimationFrame(drawStars);
}

resizeCanvas();
drawStars();

window.addEventListener("resize", resizeCanvas);

// Apparition progressive des éléments au défilement
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Le contenu reste visible si l'utilisateur préfère réduire les animations
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("visible"));
  if (animationFrame) cancelAnimationFrame(animationFrame);
}
```
