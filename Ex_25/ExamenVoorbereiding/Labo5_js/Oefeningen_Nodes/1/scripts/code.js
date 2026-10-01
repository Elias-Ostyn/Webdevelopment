const setup = () => {

    let p = document.querySelectorAll("p")

    for(let i = 0; i < p.length; i++) {
        p[i].textContent = "goed gedaan!"
    }
}
window.addEventListener("load", setup);
