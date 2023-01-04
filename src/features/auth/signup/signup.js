import "./signup.css";
import "../auth.css";
import { initSignUpPage } from "../validation.js";
import { AuthService } from "../../../shared/services/authService";
import { NotificationService } from "../../../shared/services/NotificationService";
import { validateSignUpForm } from "../validation";
//import validation
// initSignUpPage();
document.getElementById("signup_btn").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    signup();
  },
  true
);

let authService = new AuthService();
let notification = new NotificationService();

async function signup() {
  // const  vResuukt = call validateSignUpForm()
  const validationResult = validateSignUpForm();
  console.log(validationResult);
  if (!validationResult) {
    return;
  }

  let model = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    passwordConfirmation: document.getElementById("password2").value,
  };

  if (authService.checkIfEmailExist(model.email)) {
    notification.error("Email In Use");
    return;
  }
  const isInserted = authService.register(model);
  if (isInserted) {
    await notification.success("Account Created ! .. You can Sign In now");
    window.location.href = "signin.html";
  } else {
    notification.error("SomeThing Wrong");
  }
}
document.getElementById("signup_btn").addEventListener("click", signup, true);
