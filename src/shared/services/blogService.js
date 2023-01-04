import { v4 } from "uuid";
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
    return this.#dbContext.getData();
  }

  getBlog(id) {
    return this.#dbContext.getData().find((x) => x.id === id);
  }

  deleteBlog(id) {
    return true;
  }

  updateBlog(payload) {
    return true;
  }
}
