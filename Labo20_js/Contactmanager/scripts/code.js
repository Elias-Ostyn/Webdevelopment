let personen = [];
let huidigeIndex = -1; // -1 = nieuwe persoon

const bewerkNieuwePersoon = () => {
    huidigeIndex = -1;
    maakLeegFormulier();
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // alle veldjes worden hier gevalideerd ( zie validatie.js)
    valideer();

    // stop als er fouten zijn
    let fouten = document.getElementsByClassName("invalid");
    if (fouten.length > 0) return;

    // maak een persoon object
    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: document.getElementById("txtAantalKinderen").value.trim()
    };

    if (huidigeIndex === -1) {
        // nieuwe PERSOON pushen
        personen.push(persoon);
    } else {
        // bestaande persoon veranderen
        personen[huidigeIndex] = persoon;
    }

    updateLijst();
    huidigeIndex = -1;
    maakLeegFormulier();
};

const maakLeegFormulier = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors(); // zie validatie.js
};

const updateLijst = () => {
    let lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";
    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.text = personen[i].voornaam + " " + personen[i].familienaam;
        option.value = i; // ik hou hier de index bij
        lst.appendChild(option);
    }
};

const toonPersoon = () => {
    let lst = document.getElementById("lstPersonen");
    huidigeIndex = parseInt(lst.value);

    let persoon = personen[huidigeIndex];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;

    clearAllErrors(); // in het script validatie.js
};
const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonPersoon);
};

window.addEventListener("load", setup);

