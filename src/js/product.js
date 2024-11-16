// Imports
import toggleMenu from "./nav";
import { getData } from "./getData";

const productElement = document.querySelector(".product__container");
console.log(productElement);

async function eBookSelection() {
  const ebooks = await getData();
  let ebookSelected;

  ebooks.forEach((ebook) => {
    if (ebook.id == sessionStorage.getItem("ebookID")) {
      ebookSelected = ebook;
    }
  });

  productElement.innerHTML = `
          <div class="product--cover">
          <div class=""></div>
          <img src="${ebookSelected.img}" alt="${ebookSelected.title} cover" />
        </div>

        <div class="product__info">
          <div class="product__info--title">
            <h3>${ebookSelected.title}</h3>
            <p>${ebookSelected.author}</p>
          </div>
          <div class="product__info--price">
            <p>$${ebookSelected.price}</p>
          </div>
          <div class="product__info--description">
            <p class="product__quote">${ebookSelected.quote}</p>
            <p class="product__description">${ebookSelected.description}</p>
          </div>
          <div class="product__info--btn">
            <button class="secondary--btn">Buy eBook</button>
          </div>
        </div>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  toggleMenu();

  eBookSelection();

  // Add actual year on the footer
  const footerYear = document.querySelector("#footer--year");
  footerYear.textContent = new Date().getFullYear();
});
