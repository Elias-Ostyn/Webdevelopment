const setup = () => {

    let btnclick=document.getElementById("btnClick");

    btnclick.addEventListener("click", uitvoeren);


}
const uitvoeren = () =>{
    let txtOutput=document.getElementById("textOutput");
    let resultaat = "welkom!!!";

    txtOutput.innerHTML=resultaat;


}


window.addEventListener("load", setup);
