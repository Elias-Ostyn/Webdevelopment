const gemeenten = [];

const setup = () => {

    // button doen activeren als je erop klikt
    let button = document.getElementById("button");
    button.addEventListener("click", uitvoeren);
}

// uitvoeren als je een gemeente hebt getyped in de lijst pushen
const uitvoeren = () => {
    let gemeente = document.getElementById("gemeente").value;

    if (gemeente.toLowerCase() === "stop") {
        stop();
    } else if (gemeente !== "") {
        gemeenten.push(gemeente);
    }

    document.getElementById("gemeente").value = "";
}

// als je stop typed gaat hij het appenden in de option lijst zodat het tevoorschijn komt
const stop = () => {
    let select = document.getElementById("city");

    for (let i = 0; i < gemeenten.length; i++) {
        let option = document.createElement("option");
        option.text = gemeenten[i];
        option.value = gemeenten[i];
        select.appendChild(option)
        gemeenten.sort()
    }
}

window.addEventListener("load", setup);

