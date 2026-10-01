const arrayfam = ["mama","papa","papa1","Papa2","Papa3","Papa4"];
const setup = () => {
    console.log(arrayfam.length);

    console.log(arrayfam[0], arrayfam[2], arrayfam[4]);


    voegnaamtoe()


}

const voegnaamtoe = () => {

    let nieuwenaam = prompt("geef een nieuwe naam op");
    arrayfam.push(nieuwenaam);

    console.log(arrayfam);
    console.log("nieuwe lengte" , arrayfam.length);

}
window.addEventListener("load", setup);
