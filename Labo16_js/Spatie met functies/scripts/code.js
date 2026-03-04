const maakMetSpaties = (inputTekst) => {
    return inputTekst.split("").join(" ");
};

const setup = () => {
    const knop = document.getElementById("knop");
    const input = document.getElementById("tekstInput");

    knop.addEventListener("click", () => {
        const resultaat = maakMetSpaties(input.value);
        console.log(resultaat);
    });
};

window.addEventListener("load", setup);