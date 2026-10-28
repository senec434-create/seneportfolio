```javascript
/* ========================================
   ORBITAL PORTFOLIO — INTERACTIONS
======================================== */

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

/* ÉTOILES ANIMÉES */

const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
let animationFrame;
let width = 0;
let height = 0;

function createStars() {
    width = window.innerWidth;
    height = window.innerHeight;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const starCount = Math.min(
        180,
        Math.floor((width * height) / 6500)
    );

    stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.18 + 0.03
    }));

    drawStars(!reducedMotion);
}

function drawStars(animate = true) {
    ctx.clearRect(0, 0, width, height);

    for (const star of stars) {
        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(190, 210, 255, ${star.alpha})`;
        ctx.fill();

        if (animate) {
            star.y += star.speed;

            if (star.y > height) {
                star.y = 0;
                star.x = Math.random() * width;
            }
        }
    }

    if (animate) {
        animationFrame = requestAnimationFrame(() => drawStars(true));
    }
}

createStars();

let resizeTimer;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        createStars();
    }, 150);
});

/* APPARITION DES SECTIONS AU SCROLL */

const sections = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
    sections.forEach(section => section.classList.add("visible"));
} else {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(section => observer.observe(section));
}

/* MENU MOBILE */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
        menuButton.textContent = "☰";
    });
});
```
