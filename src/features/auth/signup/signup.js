import "./signup.css";

import { AuthService } from "../../../shared/services/authService";
import { NotificationService } from "../../../shared/services/NotificationService";
//import validation

let authService = new AuthService();
let notification = new NotificationService();

function signup() {
  // const  vResuukt = call validateSignUpForm()

  let model = {
    fullName: "yaman",
    email: "yaman@yaman.com",
    password: "asd.123",
    passwordConfirmation: "asd.123",
  };
  
  if (authService.checkIfEmailExist(model.email)) {
    notification.error("Email In Use");
    return;
  }
  const isInserted = authService.register(model);
  if (isInserted) {
    notification.success("Account Created ! .. You can Sign In now");
    window.location.href = "signin.html";
  } else {
    notification.error("SomeThing Wrong");
  }
}
document.getElementById("signup_btn").addEventListener("click", signup, true);
