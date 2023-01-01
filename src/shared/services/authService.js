import DbService from "./dbService.js";

import { v4 } from "uuid";

// Generate the token
export class AuthService {
  #dbContext;

  constructor() {
    this.#dbContext = new DbService("Auth");
    console.log(this.#dbContext);
  }
  login(email, password) {
    console.log(email, password);
    console.log(this.#dbContext.getData());
    const user = this.#dbContext
      .getData()
      .find((x) => x.email === email && x.password === password);
    return user;
  }

  register(model) {
    let users = this.#dbContext.getData() ?? [];
    model = {
      ...model,
      id: v4(),
    };
    users.push(model);
    this.#dbContext.saveChanges(users);
    return true;
  }
  checkIfEmailExist(email) {
    const users = this.#dbContext.getData();
    if (users) {
      return users.findIndex((x) => x.email === email) !== -1 ? true : false;
    }
    return false;
  }
}
