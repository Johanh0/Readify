// Imports
import toggleMenu from "./nav";
import ebookCollection from "./ebookCollection";
import ebookStorage from "./ebookStorage";

window.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  ebookCollection();

  setTimeout(() => {
    ebookStorage();
  }, 100);
  // Add actual year on the footer
  const footerYear = document.querySelector("#footer--year");
  footerYear.textContent = new Date().getFullYear();
});
