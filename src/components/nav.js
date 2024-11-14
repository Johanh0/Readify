export default function innerNav() {
  const headerElement = document.querySelector("#header");

  headerElement.innerHTML = `
    <nav class="nav">
        <div class="nav--logo">
          <a href="">Readify</a>
        </div>

        <div class="nav--links">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">eBooks</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

        <div class="nav--cart">
          <div>
            <img src="./src/assets/icons/heart.svg" alt="wishlist icon" />
          </div>
          <div>
            <img src="./src/assets/icons/cart.svg" alt="cart icon" />
          </div>
        </div>
    </nav>
    `;
}
