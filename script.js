var cartValue = 0;

  function updateCart() {
    if (cartValue >= 8) {
      alert("Your cart is full. Now click on checkout.");
    } else {
      cartValue = cartValue + 2;
      document.getElementById("cart-value").innerHTML = cartValue + " Coins";
      alert("Thank you for shopping with us!");
    }
  }

  function checkOut() {
    alert("Thank you for shopping with us!");
    cartValue = 0;
    document.getElementById("cart-value").innerHTML = cartValue + " Coins";
  }