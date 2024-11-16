window.addEventListener("DOMContentLoaded", () => {
  // Add actual year on the footer
  const footerYear = document.querySelector("#footer--year");
  footerYear.textContent = new Date().getFullYear();
});
