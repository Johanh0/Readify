export default function toggleMenu() {
  const menuElement = document.querySelector(".menu__icon");
  const menuModule = document.querySelector(".nav--menu__module");
  menuElement.addEventListener("click", () => {
    menuModule.classList.toggle("nav--menu__module--open");
  });
}
