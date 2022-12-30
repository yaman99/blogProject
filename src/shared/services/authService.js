import DbService from "./dbService.js";

export class AuthService {
  #dbContext;
  constructor() {
    this.#dbContext = new DbService("Auth");
  }

  login(email, password) {
    const users = this.#dbContext.getData();
    return users.find((x) => x.email === email && x.password === password);
  }

  register(fullname, email, password, passwordConfiramtion) {
    let model = {
      fullname,
      email,
      password,
      passwordConfiramtion,
    };
    this.#dbContext.saveChanges(model);
    return true;
  }

  checkIfEmailExist(email) {
    const users = this.#dbContext.getData();
    return users.findIndex((x) => x.email === email) === -1 ? true : false;
  }
}
