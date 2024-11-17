// Imports
import toggleMenu from "./nav";

// HTML Elements
const formElement = document.querySelector("#form");
const nameInput = document.querySelector("#name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const messageInput = document.querySelector("#message-input");
const submitBtn = document.querySelector("#submit-form");

// Patterns to validate the form
const namePattern = /^[a-zA-Z\s'-]+$/;
const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Add Input Error
function inputError(element) {
  const parentElement = element.parentElement.children;

  for (let index = 0; index < parentElement.length; index++) {
    parentElement[index].classList.add("error");
  }

  submitBtn.classList.remove("enable");
}

// Remove Input Error
function removeInputError(element) {
  const parentElement = element.parentElement.children;

  for (let index = 0; index < parentElement.length; index++) {
    parentElement[index].classList.remove("error");
  }

  submitBtn.classList.add("enable");
}

// Handle Button Availability
function btnAvailability(element) {
  if (
    nameInput.value.length <= 0 ||
    lastNameInput.value.length <= 0 ||
    emailPattern.test(emailInput.value) === false
  ) {
    return;
  }

  removeInputError(element);
}

// Checking Name & Last Name Input
function isName(element) {
  const nameChecked = namePattern.test(element.value);
  nameChecked ? btnAvailability(element) : inputError(element);
}

// Checking Email Input
function isEmail(element) {
  const emailChecked = emailPattern.test(emailInput.value);
  emailChecked ? btnAvailability(element) : inputError(element);
}

// Event Listeners
nameInput.addEventListener("input", (element) => isName(element.target));
lastNameInput.addEventListener("input", (element) => isName(element.target));
emailInput.addEventListener("input", (element) => isEmail(element.target));

window.addEventListener("DOMContentLoaded", () => {
  toggleMenu();

  // Add actual year on the footer
  const footerYear = document.querySelector("#footer--year");
  footerYear.textContent = new Date().getFullYear();
});
