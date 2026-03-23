const setup = () => {
    let ver = document.querySelectorAll("p");
    ver.forEach(p =>{
        p.textContent = "goed gedaan!";
    });
}
window.addEventListener("load", setup);
