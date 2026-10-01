const global = {
    personen: [],
    huidigeIndex : -1
}
const zetWaarde = (id, waarde) => document.getElementById(id).value = waarde;
const geefWaarde = (id) => document.getElementById(id).value.trim();

const heeftErrors = () =>
    ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"]
        .some(id => document.getElementById(id).className === "invalid");

const leesFormulier = () => ({
    voornaam: geefWaarde("txtVoornaam"),
    familienaam: geefWaarde("txtFamilienaam"),
    geboorteDatum: geefWaarde("txtGeboorteDatum"),
    email: geefWaarde("txtEmail"),
    aantalKinderen: geefWaarde("txtAantalKinderen")
});

const vulFormulier = (persoon) => {
    zetWaarde("txtVoornaam", persoon.voornaam);
    zetWaarde("txtFamilienaam", persoon.familienaam);
    zetWaarde("txtGeboorteDatum", persoon.geboorteDatum);
    zetWaarde("txtEmail", persoon.email);
    zetWaarde("txtAantalKinderen", persoon.aantalKinderen);}

const maakFormulierLeeg = () => {
    vulFormulier({voornaam: "",familienaam:"",geboorteDatum:"",email: "",aantalKinderen: ""});
    clearAllErrors();
}

const bewaarBewerktePersoon = () => {
    valideer();
    if (heeftErrors()) return;

    const persoon = leesFormulier();

    if (global.huidigeIndex === -1) {
        global.personen.push(persoon);
        global.huidigeIndex = global.personen.length - 1;
    } else {
        global.personen[global.huidigeIndex] = persoon;
    }

    herlaadLijst();
};

const herlaadLijst = () => {
    const lijst = document.getElementById("lstPersonen");
    lijst.textContent = "";
    global.personen.forEach((persoon, index) => {
        const option = document.createElement("option");
        option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = index;
        lijst.appendChild(option);
    });
    lijst.value = global.huidigeIndex;  // ← ook hier!
};


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    global.huidigeIndex = -1;
    maakFormulierLeeg();
};

const selecteerPersoon = (event) => {
    global.huidigeIndex = parseInt(event.target.value);
    vulFormulier(global.personen[global.huidigeIndex]);
    clearAllErrors();
}

// onze setup functie die de event listeners registreert
const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", selecteerPersoon);
};

window.addEventListener("load", setup);