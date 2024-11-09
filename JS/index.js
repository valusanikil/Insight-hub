function addToCart(courseName, coursePrice) {
  console.log("Loaded");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push({ name: courseName, price: coursePrice });
  localStorage.setItem("cart", JSON.stringify(cartItems));
  window.location.href = "/HTML/cart.html";
  console.log("clicked");
}
