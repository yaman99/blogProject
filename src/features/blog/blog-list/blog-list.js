import { BlogService } from "../../../shared/services/blogService.js";
import createBlog from "../BlogPost.js";

// new service blogService
let blogService = new BlogService(); 

let blogs = blogService.getAll(); 

if (blogs.length === 0 ) {
    const empty = document.createElement("div");
    empty.innerText = "No Blogs yet, add some!";
    document.querySelector(".empty-list").appendChild(empty);
} else { 
    for (let i= 0; i < blogs.length; i++) { 
        let item = blogs[i];
        createBlog(item); 
    }
}