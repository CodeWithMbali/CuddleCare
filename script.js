// Simple form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for booking with Cuddle Care 💕 We’ll get back to you soon!");
      form.reset();
    });
  }
});
