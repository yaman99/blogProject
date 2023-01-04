import { BlogService } from "../../../shared/services/blogService.js";
import validateForm from "../validateForm.js";

const form = document.querySelector("form");

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const authorNameInput = document.getElementById("authorName");


let blogService = new BlogService(); 

form.addEventListener("submit", validate);


function validate(e) {

  e.preventDefault();

  const idInput = document.querySelector("#id");
  idInput.value = 1;
  const formData = validateForm(titleInput, contentInput, authorNameInput);

  if (formData != null) {
    // todo : add the blog with a addBlog service

    blogService.addBlog(formData);
    window.location.assign("./list-blogs.html");
  }
  // form.classList.add('was-validated');
  // todo : check form but it skips white spaces !
}