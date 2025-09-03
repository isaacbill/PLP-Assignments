// =============================
// Load saved settings from localStorage
// =============================
let count = parseInt(localStorage.getItem("cartCount")) || 0;
const savedTheme = localStorage.getItem("theme");

const countDisplay = document.getElementById("count");
countDisplay.textContent = count;

// Apply saved theme
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  document.getElementById("toggleTheme").textContent = "☀️ Day Mode";
}

// =============================
// Part 1: Event Handling - Promo Code
// =============================
const promoBtn = document.getElementById("promoBtn");
const promoOutput = document.getElementById("promoOutput");

promoBtn.addEventListener("click", () => {
  promoOutput.textContent = "🎉 Use code SAVE20 for 20% off today!";
});

// =============================
// Part 2: Interactive Elements
// =============================

// Dark Mode Toggle
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleThemeBtn.textContent = "☀️ Day Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleThemeBtn.textContent = "🌙 Night Mode";
    localStorage.setItem("theme", "light");
  }
});

// Shopping Cart Counter
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
  localStorage.setItem("cartCount", count);
});

document.getElementById("decrease").addEventListener("click", () => {
  if (count > 0) count--;
  countDisplay.textContent = count;
  localStorage.setItem("cartCount", count);
});

// FAQ Collapsible Answers
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("hidden");
  });
});

// =============================
// Part 3: Form Validation
// =============================
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Grab input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");

  // Reset previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;

  // Validate Name
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success Message
  if (isValid) {
    formSuccess.textContent = "✅ Signup successful! Welcome to My Online Shop.";
    form.reset();
  }
});
