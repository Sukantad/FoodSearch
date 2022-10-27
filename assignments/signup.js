
import { navbar } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();
//lets start
document.querySelector("form").addEventListener("submit", displayform);
var Arraydata = JSON.parse(localStorage.getItem("dataStore")) || [];
function displayform() {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var image=document.getElementById("image").value;

  function data(name, contact, email, password,image) {
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.password = password;
    this.image= image;
  }

  var formObject = new data(name, contact, email, password,image);

var flag=false;
Arraydata.forEach(function(ele){
  if(ele.email==email){
    flag=true;
  }
})
   if (formObject.name === "") {
    alert("Fill your Name");
  } else if (formObject.contact === "") {
    alert("Fill your contact Number");
  } else if (formObject.email === "") {
    alert("Fill your Email id");
  } else if (formObject.password === "") {
    alert("Enter password");
  }
  else if(flag){
    alert("Email Already exists")
 
  }
   else {
    Arraydata.push(formObject);
    localStorage.setItem("dataStore", JSON.stringify(Arraydata));

    alert("Signup Successfull");
    window.location.href = "login.html";
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
  
}
