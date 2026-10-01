const setup = () => {
    const knop = document.getElementById('knop');

    knop.addEventListener("click", uitvoeren)
}

const uitvoeren =  () => {
    const woord = document.getElementById('woord').value;
    const start = document.getElementById("nummer1").value;
    const einde = document.getElementById("nummer2").value;


    const res = woord.substring(start, einde);
    document.getElementById("out").textContent=res;
}
window.addEventListener("load", setup);
