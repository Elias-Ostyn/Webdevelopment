const setup = () => {

    let button = document.getElementsByClassName("button");

    button[0].addEventListener("click", voeruit)


}

const voeruit = () => {
    let div = document.getElementById("myDIV");

    let para = document.createElement("p");
    para.textContent = "ik ben een paragraaf";
    div.appendChild(para);

}
window.addEventListener("load", setup);
