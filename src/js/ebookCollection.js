import { getData } from "./getData";

export default async function ebookCollection(isLimited) {
  const collectionElement = document.querySelector(".ebooks--collection");
  const getebooks = await getData();

  getebooks.forEach((ebook) => {
    if (isLimited) {
      if (ebook.id > 8) {
        return;
      }
    }

    collectionElement.innerHTML += `
                <div class="ebook--card" data-id="${ebook.id}">
              <div class="ebook--cover">
                <img src="${ebook.img}" alt="${ebook.title} ebook cover" loading="lazy"/>
              </div>
              <div class="ebook--info">
                <h5 class="ebook--title">${ebook.title}</h5>
                <p class="ebook--author">${ebook.author}</p>
              </div>
              <div class="ebook--details">
                <p class="ebook--price">$${ebook.price}</p>
                <p class="ebook--description">${ebook.description}</p>
              </div>
              <div class="ebook--btns">
                <button class="secondary--btn">View eBook</button>
                <img src="/public/icons/heart.svg" alt="wishlist icon" />
              </div>
            </div>
          </div>
      
      `;
  });
}
