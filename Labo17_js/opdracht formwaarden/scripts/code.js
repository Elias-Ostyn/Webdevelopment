const setup = () => {
    const knop = document.getElementById("toonBtn");
    knop.addEventListener("click", toonResultaat);
};

const toonResultaat = () => {
    // Checkbox roker
    const roker = document.getElementById("roker").checked ? "is roker" : "is geen roker";

    // Radiobutton moedertaal
    const moedertaalInput = document.querySelector('input[name="fav_language"]:checked');
    const moedertaal = moedertaalInput ? moedertaalInput.value : "niet gekozen";

    // Multi-select bestelling
    const bestellingSelect = document.getElementById("bestelling");
    const bestelling = Array.from(bestellingSelect.selectedOptions).map(option => option.value).join(", ");

    console.log(roker);
    console.log("Moedertaal is: " + moedertaal);
    console.log("Bestelling bestaat uit: " + (bestelling || "geen selectie"));
};

window.addEventListener("load", setup);