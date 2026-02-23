const setup = () => {

    const knop = document.getElementById("substringbutton")

    knop.addEventListener("click", uitvoeren )


}

const uitvoeren = () => {



    let woord = document.getElementById("txtInput").value;
    let start = parseInt(document.getElementById("startnummer").value);
    let einde = parseInt(document.getElementById("eindenummer").value);


    const resultaat = woord.substring(start, einde);
    document.getElementById("txtOutput").innerHTML=resultaat;

}
window.addEventListener("load", setup);