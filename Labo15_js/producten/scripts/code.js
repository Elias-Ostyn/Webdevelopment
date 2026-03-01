const setup = () => {
    const prijzen = document.getElementsByClassName("prijs");
    const aantallen = document.getElementsByClassName("aantal");
    const btwCellen = document.getElementsByClassName("btw");
    const subtotaleCellen = document.getElementsByClassName("subtotaal");
    const totaalCel = document.getElementById("totaal");
    const knop = document.getElementById("herbereken");

    const herbereken = () => {
        let totaal = 0;

        for (let i = 0; i < prijzen.length; i++) {

            // prijs omzetten naar getal
            let prijs = parseFloat(prijzen[i].textContent);

            // aantal ophalen
            let aantal = parseFloat(aantallen[i].value);

            // btw omzetten naar decimaal
            let btw = parseFloat(btwCellen[i].textContent) / 100;

            // berekening
            let subtotaal = prijs * aantal * (1 + btw);

            // afronden op 2 decimalen
            subtotaal = subtotaal.toFixed(2);

            // tonen in tabel
            subtotaleCellen[i].textContent = subtotaal + " Eur";

            totaal += parseFloat(subtotaal);
        }

        totaalCel.textContent = totaal.toFixed(2) + " Eur";
    };

    knop.addEventListener("click", herbereken);
};

window.addEventListener("load", setup);