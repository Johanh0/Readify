// Imports
import toggleMenu from "./nav.js";
import ebookCollection from "./ebookCollection.js";
import ebookStorage from "./ebookStorage.js";

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
