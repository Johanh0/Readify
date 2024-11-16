import innerNav from "../components/nav";
import innerFooter from "../components/footer";

// HTML Elements
const relevantebookElement = document.querySelector(".relevant--ebook");
const collectionElement = document.querySelector(".ebooks--collection");

// GET Data from JSON
const getData = async () => {
  const url = `src/data/ebooks.json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return data.ebooks;
};

// GET a random ebook and show it in the hero
async function randomeeBook() {
  const getebooks = await getData();
  const randomNumber = Math.floor(Math.random() * getebooks.length);
  const ebook = getebooks[randomNumber];
  console.log(ebook);
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
          <img src="${ebook.img}" alt="1984 ebook cover" />
        </div>
        <div class="relevant--ebook__right-container">
          <div class="elevant--ebook__right-container--price">
            <h3>$${ebook.price}</h3>
          </div>
          <div class="relevant--ebook__right-container--title">
            <h3>${ebook.title}</h3>
          </div>
          <div class="relevant--ebook__right-container--cta">
            <button class="buy--btn">Buy</button>
          </div>
        </div>
  `;
}

async function ebookCollection() {
  const getebooks = await getData();
  getebooks.forEach((ebook) => {
    collectionElement.innerHTML += `
              <div class="ebook--card">
            <div class="ebook--cover">
              <img src="${ebook.img}" alt="${ebook.title} ebook cover" />
            </div>
            <div class="ebook--info">
              <h5 class="ebook--title">${ebook.title}</h5>
              <p class="ebook--author">${ebook.author}</p>
            </div>
            <div class="ebook--btns">
              <button class="buy--btn">Add to Cart</button>
              <img src="./src/assets/icons/heart.svg" alt="wishlist icon" />
            </div>
          </div>
        </div>
    
    `;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  randomeeBook();
  ebookCollection();

  // Add actual year on the footer
  const footerYear = document.querySelector("#footer--year");
  footerYear.textContent = new Date().getFullYear();
});

// Adding Navbar to the website
innerNav();

// Adding Footer to the website
innerFooter();
