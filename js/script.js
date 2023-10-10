const toggle = document.querySelector("#toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle("bi-brightness-high-fill")) {
        body.style.background = "#F5F5F5";
        body.style.color = "#1c1d25";
        body.style.transition = "1s";
    } else {
        body.style.background = "#000";
        body.style.color = "#F5F5F5";
        body.style.transition = "1s";
    }
});