const setup = () => {
    const button = document.getElementById("btn");
    const div = document.getElementById("myDIV");

    button.addEventListener("click", voeruit);
}

const voeruit = () => {
    const div = document.getElementById("myDIV");
    const p = document.createElement("p");
    p.textContent = "Dit is een nieuw p-element";
    div.appendChild(p);
}
window.addEventListener("load", setup);
