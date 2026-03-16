const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let resultaat = "";

    for (let i = 0; i < zin.length; i++) {

        if (zin[i] === 'd' && zin[i + 1] === 'e') {
            resultaat += "het";
            i++; // sla de 'e' over
        } else {
            resultaat += zin[i];
        }

    }

    console.log(resultaat);
}
window.addEventListener("load", setup);
