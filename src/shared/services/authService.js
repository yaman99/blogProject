import DbService from "./dbService.js";
// import { v4 as uuidv4 } from "uuid";
import * as jwt from 'jsonwebtoken';
import { Buffer } from 'buffer';

global.Buffer = global.Buffer || Buffer;


// Generate the token
export class AuthService {
  #dbContext;
  authObject = {
    token: null,
  };
  constructor() {
    this.#dbContext = new DbService("Auth");
  }

  login(email, password) {
    const user = this.#dbContext
      .getData()
      .find((x) => x.email === email && x.password === password);
    const secret = user.id;
    const payload = {
      userId: user.id,
      name: user.fullName,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // expires in 1 hour
    };
    const token = jwt.sign(payload, secret);
    this.#dbContext.saveChanges(token);
    return token;
  }

  register(fullname, email, password, passwordConfiramtion) {
    let model = {
      id: 123,
      fullname,
      email,
      password,
      passwordConfiramtion,
    };
    this.#dbContext.saveChanges(model);
    return true;
  }
  validateToken(token) {}
  checkIfEmailExist(email) {
    const users = this.#dbContext.getData();
    return users.findIndex((x) => x.email === email) === -1 ? true : false;
  }
}
