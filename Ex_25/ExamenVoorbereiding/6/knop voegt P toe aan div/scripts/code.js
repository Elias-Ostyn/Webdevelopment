const setup = () => {

    let knop = document.getElementById("button");
    knop.addEventListener("click", (change));




}

const change = () => {
    let p = document.createElement("p");
    let div = document.getElementById("myDIV");
    p.textContent = "change";
    div.appendChild(p);


}

window.addEventListener("load", setup);
