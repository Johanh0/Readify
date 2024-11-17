export default function ebookStorage() {
  // Select all the eBook Cards elements
  const ebooksCard = document.querySelectorAll(".ebook--card");

  //   Iterating on each eBook to add and eventListener
  ebooksCard.forEach((ebook) => {
    ebook.addEventListener("click", () => {
      // Cleaning the sessionStorage
      sessionStorage.clear();
      sessionStorage.setItem("ebookID", ebook.dataset.id);

      window.location.href = "/src/html/product.html";
    });
  });
}
