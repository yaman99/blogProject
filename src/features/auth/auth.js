import { AuthService } from "../../shared/services/authService.js";

console.log("test");

let service = new AuthService();

export function login() {
  // const email = document.getElementById("email").value;
  // const password = document.getElementById("password").value;

  // const user = service.login(email, password);
  // if (user) {
  //   window.location.href("../blog/blog-list.html");
  // } else {
  //   alert("error");
  // }
  console.log("test");
}

function register() {
  let x = validateForm();
  let model = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password"),
    passwordConfirmation: document.getElementById("passwordConfirmation"),
  };
  const isInserted = service.register(model);
  // if(isInserted){

  // }
}

function validateForm() {
  
}

function passwordConfirmation(){
    const pConfirm = document.getElementById("email").value;
  const password = document.getElementById("password").value;

}

document.getElementById('button').addEventListener('click', login, true);

