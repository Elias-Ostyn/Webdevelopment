let global = {
    takenlijst: [],
    actieveGebruiker: "Tom"
}
const setup = () => {
    let knoptoevoegen = document.getElementById("toevoegen");
    knoptoevoegen.addEventListener("click", toevoegen);
    let gebruiker = document.querySelectorAll(".gebruiker");
    gebruiker.forEach((btn) => {
        btn.addEventListener("click",wisselGebruiker)
    })
    laadVanStorage();
    render();
}
const toevoegen = () => {
    let inputtxtTaak = document.getElementById("taak").value;
    let prioriteit = document.getElementById("prioriteit").value;

    if(inputtxtTaak.trim() === ""){
        alert("taak invullen aub")
        return;
    }else{
        let objectTaak = {
            id: Date.now(),
            taaknaam :inputtxtTaak,
            prioriteit : prioriteit,
            gebruiker: global.actieveGebruiker
        }
        global.takenlijst.push(objectTaak);
    }
    textleegmaken();
    opslaanTaken();
    render();
}
const render = () => {
    let lijst = document.getElementById("lijst");
    lijst.textContent = "";

    global.takenlijst.forEach(taak => {
        let div = document.createElement("div");
        div.textContent = taak.taaknaam + " ( " + taak.prioriteit + " )";
        lijst.appendChild(div);
    })
    document.getElementById("teller").textContent =
        global.takenlijst.length + " taken";
}
const textleegmaken = () => {
    document.getElementById("taak").value = "";
}
const opslaanTaken = () => {
    localStorage.setItem("lijst",JSON.stringify(global.takenlijst));
}
const laadVanStorage = () => {
    let data = localStorage.getItem("lijst");

    if(data !== null){
        global.takenlijst = JSON.parse(data);
    }
}


const wisselGebruiker = (event) => {
    global.actieveGebruiker = event.currentTarget.getAttribute("data-naam");

    document.querySelectorAll(".gebruiker")
    .forEach(btn => {
        btn.classList.remove("actief");

    })
    event.currentTarget.classList.add("actief");

}
window.addEventListener("load", setup);
