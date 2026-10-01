const setup = () => {

    const knop = document.getElementById("knop");
    const tekst = document.getElementById("tekstInput");

    knop.addEventListener("click", e => {
        const resultaat = metSpatie(tekst.value);
        console.log(resultaat);


    })
}

const metSpatie =(inputtekst) => {
    return inputtekst.split("").join(" ");

}


window.addEventListener("load", setup);