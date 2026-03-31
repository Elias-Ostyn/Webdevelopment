let student1 = {};

let geb = new Date('2004-09-10');

student1.naam = "elias";
student1.voornaam = "ostyn";
student1.geboortedatum = geb.getDate() +"-" + (geb.getMonth() + 1) + "-" + geb.getFullYear();



const object = () => {

    let obj = '{"naam":"elias","voornaam":"ostyn","geboortedatum":"10-9-2004"}'
    console.log(JSON.parse(obj));
}



const setup = () => {


    let str = JSON.stringify(student1);
    console.log(str);

    object()
}
window.addEventListener("load", setup);
