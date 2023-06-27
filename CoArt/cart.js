let cartItems = [];
let cartCount = 0;

function addToCart(productName, price) {
  cartItems.push({ productName, price });
  cartCount++;
  updateCartCount();
  renderCartItems();
  calculateTotalAmount();
  saveCartItems();
}

function removeCartItem(index) {
  cartItems.splice(index, 1);
  cartCount--;
  updateCartCount();
  renderCartItems();
  calculateTotalAmount();
  saveCartItems();
}

function toggleCart() {
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartOverlay.classList.contains("hidden")) {
    cartOverlay.classList.remove("hidden");
  } else {
    cartOverlay.classList.add("hidden");
  }
}

function saveCartItems() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartItems() {
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
    cartCount = cartItems.length;
    updateCartCount();
    renderCartItems();
    calculateTotalAmount();
  }
}

window.addEventListener('load', loadCartItems);

function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.innerText = cartCount;
}

function renderCartItems() {
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${item.productName} - $${item.price}`;
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remover";
    removeButton.onclick = () => removeCartItem(index);
    li.appendChild(removeButton);
    cartItemsList.appendChild(li);
  });
}

function calculateTotalAmount() {
  const totalAmountElement = document.getElementById("total-amount");
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  totalAmountElement.innerText = `$${totalAmount}`;
}


