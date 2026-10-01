const setup = () => {
    let geboorteDatum = new Date("2004-09-10");
    let vandaag = new Date();

    let verschilmaand = vandaag - geboorteDatum;
    let verschildagen = Math.floor(verschilmaand/ (1000 *60 *60 * 24));
    console.log( "je bent nu " + verschildagen + "dagen oud");

}

window.addEventListener("load", setup);
