const users = [
  { username: "denmark", password: "bensing" },
  { username: "rex", password: "tolentino" },
  { username: "arden", password: "deocampo" }
];

let cartItems = [];

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

function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function addToCart(itemName) {
  const foundItem = cartItems.find(item => item.name === itemName);
  if (foundItem) {
      foundItem.quantity++;
  } else {
      cartItems.push({ name: itemName, quantity: 1 });
  }
  displayCartItems();
}

function displayCartItems() {
 

function removeFromCart(index) {
  cartItems.splice(index, 1);
  displayCartItems();
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavigation();
});

function updateNavigation() {
  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".menu");
  const loginLink = document.createElement("a");
  loginLink.href = "login.html";
  loginLink.textContent = "Login";
  menu.appendChild(loginLink);
}
}
