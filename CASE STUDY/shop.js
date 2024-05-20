const users = [
  { username: "denmark", password: "bensing" },
  { username: "rex", password: "tolentino" },
  { username: "arden", password: "deocampo" }
];

function LogIn() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  const foundUser = users.find(u => u.username === user && u.password === pass);

  if (foundUser) {
      alert("Login successful!");
      window.location.href = "index.html";
  } else {
      alert("Invalid username or password. Please try again.");
  }
}

function SignUp() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var conPass = document.getElementById("conpassword").value;

  if (pass === conPass) {
      users.push({ username: user, password: pass });
      alert("Sign up successful! You can now log in.");
      window.location.href = "login.html";
  } else {
      alert("Passwords do not match. Please try again.");
  }
}

function ShowPass() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
}


let cart = [];

function openNav() {
    document.getElementById("mySidebar").style.width = "550px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function showProductDetails(name, price, imageUrl) {
    document.getElementById("itemDetails").style.display = "block";
    document.getElementById("productImage").src = imageUrl;
    document.getElementById("productName").innerText = name;
    document.getElementById("productPrice").innerText = price;
}

function addToCart() {
    const name = document.getElementById("productName").innerText;
    const price = parseInt(document.getElementById("productPrice").innerText);
    const quantity = parseInt(document.getElementById("quantity").value);
    const imageUrl = document.getElementById("productImage").src;

    const product = { name, price, quantity, imageUrl };

    cart.push(product);
    updateCart();
    closeNav();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    const totalDiv = document.getElementById("total");
    cartItemsDiv.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cartItem";

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItemDiv.innerHTML = `
            <div class="itemImage"><img src="${item.imageUrl}" alt="${item.name}"></div>
            <div class="itemName">${item.name}</div>
            <div class="itemQuantity">Quantity: ${item.quantity}</div>
            <div class="removeButton"><button onclick="removeFromCart(${index})">Remove</button></div>
        `;

        cartItemsDiv.appendChild(cartItemDiv);
    });

    totalDiv.innerText = `Total: P ${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
function closeItemDetails() {
  document.getElementById("itemDetails").style.display = "none";
}
