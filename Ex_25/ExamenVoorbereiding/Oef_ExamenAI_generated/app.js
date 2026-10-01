let global = {
    boeken : [],
    actieveGebruiker: "Sara"
}


const setup = () => {

    let knop = document.getElementById("voegToeBtn");
    knop.addEventListener("click", voegBoekToe);

    let gebruiker = document.querySelectorAll(".gebruiker");
    gebruiker.forEach((item) => {
        item.addEventListener("click", wisselGebruiker)
    })


    laadVanStorage();
    renderBoeken();
}

const voegBoekToe = () => {
    let titel = document.getElementById("titel").value;
    let auteur = document.getElementById("auteur").value;
    let  genre = document.getElementById("genre").value;

    if (titel.trim() === "" || auteur.trim() === "") {
        alert("vul titel en auteur in ");
        return;
    }else{
        maakNieuwObject(titel , auteur, genre);
    }
    document.getElementById("titel").value = "";
    document.getElementById("auteur").value = "";
}
const maakNieuwObject = (titel , auteur , genre) => {
    let object = {
        id: Date.now(),
        titel: titel,
        auteur: auteur,
        genre: genre,
        uitgeleendAan: null
    }
    global.boeken.push(object);
    slaOpInStorage();
    renderBoeken();
}

const wisselGebruiker = (event) => {
    global.actieveGebruiker = event.currentTarget.getAttribute("data-naam");

    document.getElementById("actieveGebruiker").textContent = global.actieveGebruiker;

    let gebruiker  = document.querySelectorAll(".gebruiker");
    gebruiker.forEach((gebruiker) => {
        gebruiker.classList.remove("actief");
    })
    // current target zijn
    event.currentTarget.classList.add("actief");

}
const renderBoeken = () => {
    let boekenlijst = document.getElementById("boekenLijst");
    boekenlijst.textContent = "";

    let teller = document.getElementById("teller");
    teller.textContent = global.boeken.length + " boeken";

    if (global.boeken.length === 0){
        let p = document.createElement("p");
        p.classList.add("leeg-bericht");
        p.textContent = "nog geen boeken toegevoegd";
        boekenlijst.appendChild(p);
        return;
    }else{
        for (let i = 0; i < global.boeken.length; i++) {
            let kaaart = maakBoekKaart(global.boeken[i]);
            boekenlijst.appendChild(kaaart);
        }
    }
}
const laadVanStorage = () => {
    let boeken = localStorage.getItem("VIVES.bibliotheek.boeken");

    if(boeken !== null){
        global.boeken = JSON.parse(boeken);
    }
}
const slaOpInStorage = () => {
    localStorage.setItem("VIVES.bibliotheek.boeken" , JSON.stringify(global.boeken));

}
const maakBoekKaart = (boek) => {
    let nieuwediv = document.createElement("div");
    nieuwediv.classList.add("boek-kaart");

    if (boek.uitgeleendAan !== null) {
        nieuwediv.classList.add("uitgeleend");
    }

    let titel = document.createElement("span");
    titel.classList.add("boek-titel");
    titel.textContent = boek.titel;
    nieuwediv.appendChild(titel);

    let auteur = document.createElement("span");
    auteur.classList.add("boek-auteur");
    auteur.textContent = boek.auteur;
    nieuwediv.appendChild(auteur);

    let genre = document.createElement("span");
    genre.classList.add("boek-genre");
    genre.textContent = boek.genre;
    nieuwediv.appendChild(genre);

    let status = document.createElement("span");
    status.classList.add("boek-status");

    if (boek.uitgeleendAan !== null) {
        status.textContent = "Uitgeleend aan " + boek.uitgeleendAan;
    } else {
        status.textContent = "Beschikbaar";
    }

    nieuwediv.appendChild(status);

    // ---------------- BUTTON ----------------
    let knop = document.createElement("button");

    if (boek.uitgeleendAan === null) {
        knop.textContent = "Uitlenen aan " + global.actieveGebruiker;

        knop.addEventListener("click", () => {
            toggleUitlenen(boek.id);
        });

    } else if (boek.uitgeleendAan === global.actieveGebruiker) {
        knop.textContent = "Terugbrengen";

        knop.addEventListener("click", () => {
            toggleUitlenen(boek.id);
        });

    } else {
        knop.textContent = "Bezet";
        knop.disabled = true;
    }

    nieuwediv.appendChild(knop);

    return nieuwediv;
};
const toggleUitlenen = (id) => {
    let boek = global.boeken.find(b => b.id === id);

    if (boek.uitgeleendAan === null) {
        boek.uitgeleendAan = global.actieveGebruiker;
    } else if (boek.uitgeleendAan === global.actieveGebruiker) {
        boek.uitgeleendAan = null;
    }

    slaOpInStorage();
    renderBoeken();
};
window.addEventListener('load', setup);
