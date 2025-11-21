const form = document.getElementById("password-sign-up-form");

form.addEventListener("submit", function (e) {
  const password = document.getElementById("password-sign-up").value;
  const confirmPassword = document.getElementById("confirm-password-sign-up").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    e.preventDefault();
  }
});
