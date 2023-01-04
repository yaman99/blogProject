import { AuthService } from "../../../shared/services/authService.js";
import { NotificationService } from "../../../shared/services/NotificationService.js";
import "../validation"
import "../auth.css"
import { initLogInPage } from "../validation.js";
initLogInPage();
// event listners
document.getElementById("login_btn").addEventListener("click", login, true);

let service = new AuthService();
let notification = new NotificationService();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = service.login(email, password);
  if (user) {
    window.location.href = "../features/blog-list.html";
  } else {
    notification.error("Invalid Credentials");
  }
}
