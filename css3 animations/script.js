/* ===========================
   PART 2: JAVASCRIPT FUNCTIONS
   =========================== */

// Global variable for discount
let globalDiscountRate = 0;

// Function with parameters + return value
function calculateDiscount(price, discountPercent) {
  let localDiscount = discountPercent / 100; // local variable
  globalDiscountRate = localDiscount; // update global
  return price - (price * localDiscount);
}

// Show discount in DOM
function showDiscount() {
  let price = parseFloat(document.getElementById("priceInput").value);
  let discount = parseFloat(document.getElementById("discountInput").value);

  if (isNaN(price) || isNaN(discount)) {
    document.getElementById("result").innerText = "⚠️ Please enter valid numbers.";
    return;
  }

  let finalPrice = calculateDiscount(price, discount);
  document.getElementById("result").innerText =
    `Original: $${price.toFixed(2)} | Discount: ${discount}% | Final Price: $${finalPrice.toFixed(2)}`;
}

// Stock checker function
function checkStock() {
  let stock = parseInt(document.getElementById("stockInput").value);
  let stockResult = document.getElementById("stockResult");

  if (isNaN(stock)) {
    stockResult.innerText = "⚠️ Please enter a valid stock number.";
    stockResult.classList.remove("low-stock");
    return;
  }

  if (stock <= 5) {
    stockResult.innerText = `⚠️ Only ${stock} left in stock! Hurry!`;
    stockResult.classList.add("low-stock"); // adds CSS animation
  } else {
    stockResult.innerText = `✅ ${stock} items available.`;
    stockResult.classList.remove("low-stock");
  }
}

/* ===========================
   PART 3: CSS + JS ANIMATIONS
   =========================== */

let cartCount = 0;

function toggleCart() {
  let modal = document.getElementById("cartModal");
  modal.classList.toggle("show");

  // Toggle display between "flex" and "none"
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}

// Add item to cart and trigger bounce animation
function addToCart() {
  cartCount++;
  document.getElementById("cartCount").innerText = cartCount;

  // Add bounce animation to button
  let button = document.querySelector(".add-cart-btn");
  button.classList.add("bounce");
  setTimeout(() => button.classList.remove("bounce"), 600);
}
