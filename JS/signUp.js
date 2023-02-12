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

  // Check if the email already exists in localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = existingUsers.find((user) => user.email === email);

  if (existingUser) {
    alert(
      "An account with this email already exists. Please use a different email."
    );
    return;
  }

  existingUsers.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Sign up successful!");
});
