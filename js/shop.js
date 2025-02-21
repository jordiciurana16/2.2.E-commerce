// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

var cart = [];

var total = 0;

function buy(id) {
  const product = products.find((p) => p.id === id);
  if (product) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  }
  document.getElementById("count_product").innerText = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
}

function cleanCart() {
  cart = [];
  document.getElementById("count_product").innerText = 0;
  printCart();
}

function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
}

function applyPromotionsCart() {
  cart.forEach((item) => {
    if (item.id === 1 && item.quantity >= 3) {
      item.subtotalWithDiscount = (item.price * item.quantity * 0.8).toFixed(2);
    } else if (item.id === 3 && item.quantity >= 10) {
      item.subtotalWithDiscount = (item.price * item.quantity * 0.7).toFixed(2);
    } else {
      item.subtotalWithDiscount = (item.price * item.quantity).toFixed(2);
    }
  });
}

function printCart() {
  applyPromotionsCart();

  const cartList = document.getElementById("cart_list");
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("tr");

    const productName = document.createElement("th");
    productName.scope = "row";
    productName.innerText = item.name;

    const productPrice = document.createElement("td");
    productPrice.innerText = `$${item.price}`;

    const productQuantity = document.createElement("td");
    productQuantity.innerText = item.quantity;

    const productTotal = document.createElement("td");
    const totalPrice = item.subtotalWithDiscount || item.price * item.quantity;
    productTotal.innerText = `$${totalPrice}`;

    row.appendChild(productName);
    row.appendChild(productPrice);
    row.appendChild(productQuantity);
    row.appendChild(productTotal);

    cartList.appendChild(row);
  });

  const totalPriceElement = document.getElementById("total_price");
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.subtotalWithDiscount || item.price * item.quantity),
    0
  );
  totalPriceElement.innerText = totalPrice.toFixed(2);
}

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
