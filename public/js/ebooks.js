// Imports
import toggleMenu from "/js/nav";
import ebookCollection from "/js/ebookCollection";
import ebookStorage from "/js/ebookStorage";

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
