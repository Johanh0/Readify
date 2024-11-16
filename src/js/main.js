// Imports
import toggleMenu from "./nav";
import { getData } from "./getData";
import ebookCollection from "./ebookCollection";
import ebookStorage from "./ebookStorage";

// HTML Elements
const relevantebookElement = document.querySelector(".relevant--ebook");

// GET a random ebook and show it in the hero
async function randomeeBook() {
  const getebooks = await getData();
  const randomNumber = Math.floor(Math.random() * getebooks.length);
  const ebook = getebooks[randomNumber];

  relevantebookElement.innerHTML = `
          <div class="relevant--ebook__left-container">
          <div class=relevant--ebook__left-container--quote">
            <h3>Quote</h3>
            <p class="relevant--ebook--quote">
              "${ebook.quote}"
            </p>
          </div>
          <div class="relevant--ebook__left-container--author">
            <h3>Author</h3>
            <p>${ebook.author}</p>
          </div>
        </div>
        <div class="relevant--ebook__center-container">
          <img src="${ebook.img}" alt="${ebook.title} ebook cover" loading="lazy"/>
        </div>
        <div class="relevant--ebook__right-container">
          <div class="elevant--ebook__right-container--price">
            <h3>$${ebook.price}</h3>
          </div>
          <div class="relevant--ebook__right-container--title">
            <h3>${ebook.title}</h3>
          </div>
          <div class="relevant--ebook__right-container--cta">
            <button class="secondary--btn">Buy</button>
          </div>
        </div>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  randomeeBook();
  ebookCollection(true);

  setTimeout(() => {
    ebookStorage();
  }, 1000);

  // Add actual year on the footer
  const footerYear = document.querySelector("#footer--year");
  footerYear.textContent = new Date().getFullYear();
});
