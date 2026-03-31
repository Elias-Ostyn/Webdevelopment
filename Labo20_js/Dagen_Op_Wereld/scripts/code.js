const setup = () => {


    let geboorteDatum = new Date('2004-09-10T04:00:00.000Z');
    let vandaag = Date.now();


    let verschil = vandaag - geboorteDatum.getTime()

    let dagen = verschil / (1000 * 60 * 60 * 24);
    console.log(dagen);
}
window.addEventListener("load", setup);
