document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = document.querySelectorAll(".menu-btn");
    const sections = document.querySelectorAll(".section");

    menuButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            menuButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Hide all sections and show the clicked one
            sections.forEach(section => section.classList.add("hidden"));
            document.getElementById(button.dataset.section).classList.remove("hidden");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Competitive Programmer | Software Developer";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Passionate about Competitive Programming & Software Development.";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("intro-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 60);
        }
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = document.querySelectorAll(".menu-btn");
    const sections = document.querySelectorAll(".section");

    menuButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all sections
            sections.forEach(section => section.classList.remove("active"));

            // Show the clicked section with animation
            document.getElementById(button.dataset.section).classList.add("active");
        });
    });

    // Set Home section as active by default
    document.getElementById("home").classList.add("active");
});
