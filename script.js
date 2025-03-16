document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            if (mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.remove("hidden");
                mobileMenu.classList.add("opacity-0", "scale-95"); // Start animation
                setTimeout(() => {
                    mobileMenu.classList.add("opacity-100", "scale-100", "transition-all", "duration-300");
                    mobileMenu.classList.remove("opacity-0", "scale-95");
                }, 10); // Delay for smoother effect
            } else {
                mobileMenu.classList.add("opacity-0", "scale-95");
                setTimeout(() => {
                    mobileMenu.classList.add("hidden");
                    mobileMenu.classList.remove("opacity-100", "scale-100");
                }, 200); // Wait before hiding
            }
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
                mobileMenu.classList.add("opacity-0", "scale-95");
                setTimeout(() => {
                    mobileMenu.classList.add("hidden");
                    mobileMenu.classList.remove("opacity-100", "scale-100");
                }, 200);
            }
        });
    }

    // Smooth Scroll Behavior
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for header height
                    behavior: "smooth",
                });

                // Close mobile menu after clicking a link
                mobileMenu.classList.add("opacity-0", "scale-95");
                setTimeout(() => {
                    mobileMenu.classList.add("hidden");
                    mobileMenu.classList.remove("opacity-100", "scale-100");
                }, 200);
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const text = "Hi, I'm Yashodip More! 🚀";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-effect").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Animated Background Particles
    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const numberOfParticles = 50;

    class Particle {
        constructor(x, y, size, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.02;
        }

        draw() {
            ctx.fillStyle = "rgba(255, 255, 0, 0.7)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            let size = Math.random() * 3 + 1;
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let speedX = Math.random() * 1 - 0.5;
            let speedY = Math.random() * 1 - 0.5;
            particlesArray.push(new Particle(x, y, size, speedX, speedY));
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    init();
    animateParticles();
});

// Typing Effect
const textElement = document.getElementById("typing-text");
const text = "Hi, I'm Yashodip More!";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Particles Animation
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

class Particle {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < 80; i++) {
        let size = Math.random() * 3;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, size, speedX, speedY));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
