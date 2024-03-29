const toggle = document.querySelector("#toggleDark");
const body = document.querySelector("body");
const heroHeader = document.querySelector(".hero-header");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// toggle.addEventListener("click", function () {
//   this.classList.toggle("bi-moon");
//   if (this.classList.toggle("bi-brightness-high-fill")) {
//     body.style.background = "#F5F5F5";
//     body.style.color = "#1c1d25";
//     body.style.transition = "1s";
//   } else {
//     body.style.background = "#000";
//     body.style.color = "#F5F5F5";
//     body.style.transition = "1s";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  hamburger.addEventListener("click", function () {
    console.log("Clicked");
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    navLinks.classList.toggle("show");
  });
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = card.querySelector(".description-link").href;
  });
});
