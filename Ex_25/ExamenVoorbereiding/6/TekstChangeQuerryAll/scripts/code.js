const setup = () => {
    let para = document.querySelectorAll("p");
    para.forEach(para => {
        para.textContent = "goed gedaan";
    })

    let li = document.querySelectorAll("li");
    li.forEach(li => {
        li.classList.add("rood");
    })

    let img = document.createElement("img");
    img.src = // pad van de foto
    img.alt = "beschrijving afbeelding"
    document.body.appendChild(img);

}
window.addEventListener("load", setup);
