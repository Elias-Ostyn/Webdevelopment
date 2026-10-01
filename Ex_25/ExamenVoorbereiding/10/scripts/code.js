let global = {
    g: { titel: "Google", url: "https://www.google.com/search?q=", kleur: "#4285F4" },
    y: { titel: "Youtube", url: "https://www.youtube.com/results?search_query=", kleur: "#FF0000" },
    x: { titel: "X", url: "https://x.com/hashtag/", kleur: "#1DA1F2" },
    i: { titel: "Instagram", url: "https://www.instagram.com/explore/tags/", kleur: "#C13584" }
};
const setup = () => {
    let buttongo = document.getElementById("btnGo");
    buttongo.addEventListener("click", verwerkCommando);

    const uithalen = JSON.parse(localStorage.getItem("history")) ?? [];
    uithalen.forEach((item) => {
        maakKaartAanHistory(item.prefix , item.res, item.url)
    })

}
const verwerkCommando = () => {
    let commando = document.getElementById("inputCommando").value;
    let prefix  = commando[1];
    let res  = commando.slice(3)
    control(prefix , res)
}
const control = (prefix, res) =>{
    if (global[prefix] === undefined){
        alert("unknown command prefix")

    }else {
        let site = global[prefix];
        let url = site.url + res;
        window.open(url, "_blank");
        maakKaartAanHistory(prefix, res, url);
        opslaangegevens(prefix, res, url);
    }
}
const opslaangegevens = (prefix , res , url) => {
    const geschiedenis = JSON.parse(localStorage.getItem("history")) ?? [];

    // voeg obj toe
    geschiedenis.push({
        prefix : prefix,
        res : res,
        url : url
    })

    localStorage.setItem("history", JSON.stringify(geschiedenis));
}
const maakKaartAanHistory =(prefix , res, url) => {
    let history = document.getElementById("history");
    let topdiv = document.createElement("div");
    topdiv.classList.add("col-md-4","mb-3");

    let seconddiv = document.createElement("div");
    seconddiv.classList.add("card","text-white");
    seconddiv.style.backgroundColor = global[prefix].kleur

    let thirddiv = document.createElement("div");
    thirddiv.classList.add("card-body");

    let cardTitel = document.createElement("h5");
    cardTitel.classList.add("card-title");
    cardTitel.textContent = global[prefix].titel

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = res;

    let link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = "go";
    link.classList.add("btn", "btn-light", "btn-sm");


    history.appendChild(topdiv);
    topdiv.appendChild(seconddiv);
    seconddiv.appendChild(thirddiv);
    thirddiv.appendChild(cardTitel)
    thirddiv.appendChild(cardText);
    thirddiv.appendChild(link);

}
window.addEventListener("load", setup);
