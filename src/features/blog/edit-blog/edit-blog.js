import validateForm from "../validateForm.js";

const form = document.querySelector(".edit-blog-form");

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const authorNameInput = document.getElementById("authorName");


const id = document.querySelector("#id");
function intilizeForm() {
    // todo :call 
    const formData = JSON.parse(sessionStorage.getItem("1"));
    console.log(formData);
    titleInput.value = formData["title"]; 
    contentInput.value = formData["content"];
    authorNameInput.value = formData["authorName"]; 
    id.value = formData["id"];
}

intilizeForm(); 


form.addEventListener("submit", validate);

function validate(e) {

    e.preventDefault();

    const formData = validateForm(titleInput, contentInput, authorNameInput, id);

    if (formData != null) {
        // todo : submit
        console.log(formData);
        // sessionStorage.setItem(formData["id"], JSON.stringify(formData));
        window.location.assign("./list-blogs.html");
    }
    // todo : check form but it skips white spaces !

}

