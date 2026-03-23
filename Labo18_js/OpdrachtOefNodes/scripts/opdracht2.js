const setup = () => {
    const list = document.querySelectorAll("li");
    list.forEach((li) => {
        li.classList.add("listitem");
    })
}
window.addEventListener("load", setup);
