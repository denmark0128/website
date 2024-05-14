const users = [
    { username: "denmark", password: "bensing" },
    { username: "rex", password: "tolentino" },
    { username: "arden", password: "deocampo" }
];
let col = 0;


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


function SignUp(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var conPass = document.getElementById("conpassword").value;

    if (pass == conPass){
        
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
  let cartItems = [];

function addToCart(itemName) {
    cartItems.push(itemName);
    displayCartItems();
}

function displayCartItems() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = ""; 
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartItemsList.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", updateNavigation);
