const setup = () => {
    const zin = "De man van An gaf geen hand aan ambetante verwanten";
    const zinLower = zin.toLowerCase();

    let index = zinLower.indexOf("an");

    while (index !== -1) {
        console.log("gevonden op index:", index);
        index = zinLower.indexOf("an", index + 1);
    }
};

window.addEventListener("load", setup);