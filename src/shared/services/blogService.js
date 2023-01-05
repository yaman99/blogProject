import {v4} from "uuid";
import DbService from "./dbService";

export class BlogService {
  #dbContext;

  constructor() {
    this.#dbContext = new DbService("Blog");
  }

  addBlog(payload) {
    let blogs = this.#dbContext.getData() ?? [];
    payload = {
      ...payload,
      id: v4(),
    };
    blogs.push(payload);
    this.#dbContext.saveChanges(blogs);
    return true;
  }

  getAll() {
    if (this.#dbContext.getData()) {
      return this.#dbContext.getData();
    } else {
      return [];
    }

  }

  getBlog(id) {
    return this.#dbContext.getData().find((x) => x.id === id);
  }

  deleteBlog(id) {
    return true;
  }

  updateBlog(payload) {
    payload["id"] = this.getBlog(payload["id"]);
    return true;
  }
}
