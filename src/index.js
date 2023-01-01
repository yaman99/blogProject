import "./main.css";

// let routes = {
//   login: "features/signin.html",
//   home: "features/blog-list.html",
// };

// const auth = JSON.parse(localStorage.getItem("auth"));
// if (auth?.token) {
//   redirect(routes.home);
// } else {
//   redirect(routes.login);
// }

// function redirect(route) {
//   const result = window.location.pathname.includes(route);
//   if (!result) {
//     window.location.href = route;
//   } else {
//     return;
//   }
// }

import { v4 } from 'uuid';
const myUUID = v4();
console.log(myUUID); // Outputs a new UUID