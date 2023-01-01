import './signup.css';

import { AuthService } from "../../../shared/services/authService";
import { NotificationService } from "../../../shared/services/NotificationService";
let authService = new AuthService();
let notification = new NotificationService();
function signup() {
  let model = {
    fullName: "yaman",
    email: "yaman@yaman.com",
    password: "asd.123",
    passwordConfirmation: "asd.123",
  };
  const isInserted = authService.register(model);
  if (isInserted) {
    notification.success("Account Created ! .. You can Sign In now");
    window.location.href = "signin.html";
  } else {
    notification.error("SomeThing Wrong");
  }
}
document.getElementById("signup_btn").addEventListener("click", signup, true);
