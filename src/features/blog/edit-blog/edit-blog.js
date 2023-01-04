import { BlogService } from "../../../shared/services/blogService.js";
import validateForm from "../validateForm.js";

const form = document.querySelector(".edit-blog-form");

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const authorNameInput = document.getElementById("authorName");


let blogService = new BlogService(); 
let blogId = null; 


//  get id from the href
function intilizeForm() {
    // todo : get id from the url 
    const formData = blogService.getBlog(id);
    titleInput.value = formData["title"]; 
    contentInput.value = formData["content"];
    authorNameInput.value = formData["authorName"]; 
}

intilizeForm(); 

form.addEventListener("submit", validate);

function validate(e) {

    e.preventDefault();

    const formData = validateForm(titleInput, contentInput, authorNameInput);

    if (formData != null) {
        // todo : submit
        blogService.updateBlog(formData);
        window.location.assign("./list-blogs.html");
    }
    // todo : check form but it skips white spaces !

}

