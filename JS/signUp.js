const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  if (!password) {
    alert("Please enter your password.");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Sign up successful!");
  let space = " ";
  console.log(name + space + email + space + password);
});
