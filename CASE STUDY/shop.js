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
        window.location.href = "shop.html";

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
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }