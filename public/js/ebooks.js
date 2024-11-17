// Imports
import toggleMenu from "/public/js/nav";
import ebookCollection from "/public/js/ebookCollection";
import ebookStorage from "/public/js/ebookStorage";

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
