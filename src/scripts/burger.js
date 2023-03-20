window.addEventListener("load", sidenVises);

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav_menu");

function sidenVises() {
  console.log("sidenVises");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}
