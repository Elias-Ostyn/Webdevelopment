const setup = () => {
    const knop = document.getElementById("knop");
    const input = document.getElementById("tekstInput");

    knop.addEventListener("click", () => {
        console.log(input.value.split("").join(" "));
    });
}

window.addEventListener("load", setup);
