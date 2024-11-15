export default function innerFooter() {
  const footerElement = document.querySelector("#footer");

  footerElement.innerHTML = `
          <div class="reveal--content">
        <section class="footer__contact">
          <p>Your next great eBook is just a click away.</p>
          <h3>Get in Touch!</h3>
          <button>Contact Us</button>
          <p>&copy; <span id="footer--year"></span> Readify</p>
        </section>
        <section class="footer__links">
          <div class="footer__links--logo">
            <p>Readify</p>
          </div>
          <div class="footer__links--links">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">eBooks</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div class="footer__links--social">
            <a href="">
              <img src="./src/assets/icons/linkedin.svg" alt="Linkedin icon" />
            </a>
            <a href="">
              <img src="./src/assets/icons/github.svg" alt="Github icon" />
            </a>
          </div>
        </section>
      </div>
    `;
}
