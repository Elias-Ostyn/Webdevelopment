const setup = () => {
    const knop = document.getElementById("knop");

    knop.addEventListener("click", herberekenen)
}

const herberekenen = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwcellen = document.getElementsByClassName("btw");
    let subtotaalcellen = document.getElementsByClassName("subtotaal");

    let totaalcel = document.getElementsByClassName("totaal");

    let tot = 0;
    for(let i = 0; i< prijs.length; i++){

        // prijs omzetten naar getal ==> nu is string ==> getal
        let prijs = parseFloat(prijzen[i].textContent);

        // aantal ophalen
        let aantal = parseFloat(aantallen[i].value);

        //btw omzetten naar dec getal
        let btwcel = parseFloat(btwcellen[i].value)/100;
        // berekenen
        let subtot = prijs * aantal *(1+btwcel);

        //getal afronden op 2cijfers
        subtot = subtot.toFixed(2);

        tot += parseFloat(subtot);
    }

    totaalcel.textContext = tot.toFixed(2) + " Eur";
}
window.addEventListener("load", setup);
