function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  let total = 0;
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item, index) => {
    const listItem = document.createElement("li");

    // Create item text
    const itemText = document.createElement("span");
    itemText.textContent = `${item.name} - $${item.price}`;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = () => deleteItem(index);

    // Append item text and delete button to list item
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);

    cartItemsContainer.appendChild(listItem);
    total += item.price;
  });

  totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

function deleteItem(index) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1); // Remove the item at the given index
  localStorage.setItem("cart", JSON.stringify(cartItems)); // Save updated cart to localStorage
  loadCart(); // Reload the cart
}

function buyNow() {
  alert("Thank you for your purchase!");
  localStorage.removeItem("cart");
  window.location.href = "/HTML/index.html";
}

function goBack() {
  window.location.href = "/HTML/index.html";
}

loadCart();
