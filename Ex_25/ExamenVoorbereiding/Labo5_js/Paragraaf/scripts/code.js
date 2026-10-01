const setup = () => {

    const change = document.getElementsByClassName("belangrijk");
    console.log(change);

    for (let i = 0; i < change.length; i++) {
        change[i].classList.add("opvallend");
    }
}

window.addEventListener("load", setup);