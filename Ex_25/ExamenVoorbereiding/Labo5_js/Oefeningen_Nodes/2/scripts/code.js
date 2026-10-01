const setup = () => {

    let listitems = document.querySelectorAll("li");

    for(let i = 0; i < listitems.length; i++) {
        listitems[i].classList.add("listitem");
    }





    let img = document.createElement("img");
    img.setAttribute("src","images/afro sam.jpg");
    document.body.appendChild(img);
}
window.addEventListener("load", setup);
