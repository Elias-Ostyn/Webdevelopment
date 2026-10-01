const student1 =  {
    voornaam : "jan",
    familienaam: "jansens",
    geboorteDatum: new Date("2004-09-10"),
    adres: {
        straat: "tienjesstraat",
        postcode: "8530",
        gemeente: "kortrijk",

    },
    IsIngeschreven : true,
    aantalAutos: 2


};

const Jsonstring = JSON.stringify(student1, null, 2);
console.log(Jsonstring);


const student2 = JSON.parse(Jsonstring);
console.log(student2.voornaam + " woont in " + student2.adres.gemeente);
const setup = () => {
}
window.addEventListener("load", setup);
