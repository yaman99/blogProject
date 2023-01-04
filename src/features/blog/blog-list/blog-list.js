import createBlog from "../BlogPost.js";

// new service blogService
if (sessionStorage.length == 1 ) { 
    const empty = document.createElement("div");
    empty.innerText = "No Blogs yet, add some!";
    document.querySelector(".empty-list").appendChild(empty);
} else { 
    
    for (let i= 1; i < sessionStorage.length; i++) { 
        let item = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage)[i]))
        // use allBlog 
        createBlog(item); 
    }
}