
import { navbar } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.querySelector("form").addEventListener("submit", formdisplay);
var dataArr = JSON.parse(localStorage.getItem("dataStore")) || [];
function formdisplay() {
  event.preventDefault();
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  function data(email, password) {
    this.email = email;
    this.password = password;
  }

  var formObject = new data(email, password);


  var flag = false;
  if (dataArr === null) {
    alert("Please Signup first");
  } else {
    dataArr.forEach((elem) => {
      if (
        formObject.email == elem.email &&
        formObject.password == elem.password
      ) {
        flag = true;
        localStorage.setItem("profile", JSON.stringify(elem));
        console.log(elem.name, "Done")
      } else {
        flag = false;
      }
    });
  }

  if (flag) {
    alert("Login Successfull");
    window.location.href = "index.html";
  } else {
    alert("invalid Credentials");
  }
}

