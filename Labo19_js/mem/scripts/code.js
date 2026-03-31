const setup = () => {

    // AFBEELDINGEN (LET OP: juiste pad!)
    let afbeeldingen = [
        "img/foto_1.jpg",
        "img/foto_2.jpg",
        "img/foto_3.jpg",
        "img/foto_4.jpg",
        "img/foto_5.jpg",
        "img/foto_6.jpg"
    ];

    let kaarten = [];
    let eersteKaart = null;
    let tweedeKaart = null;
    let isBezig = false;

    // DUPLICEREN + SHUFFLE
    const maakKaarten = () => {
        kaarten = [...afbeeldingen, ...afbeeldingen];
        kaarten.sort(() => Math.random() - 0.5);
    };

    // SPEL OPBOUWEN
    const bouwSpel = () => {
        let spel = document.getElementById("spel");
        spel.innerHTML = "";

        kaarten.forEach((img) => {
            let kaart = document.createElement("div");
            kaart.classList.add("kaart");
            kaart.dataset.image = img;

            kaart.innerHTML = `
                <img src="${img}" class="voorkant">
                <img src="img/achterkant.jpg" class="achterkant">
            `;

            kaart.addEventListener("click", klikKaart);
            spel.appendChild(kaart);
        });
    };

    // CLICK
    const klikKaart = function () {
        if (isBezig) return;
        if (this.classList.contains("omgedraaid")) return;

        this.classList.add("omgedraaid");

        if (!eersteKaart) {
            eersteKaart = this;
        } else {
            tweedeKaart = this;
            controleerMatch();
        }
    };

    // MATCH CHECK
    const controleerMatch = () => {
        isBezig = true;

        let img1 = eersteKaart.dataset.image;
        let img2 = tweedeKaart.dataset.image;

        if (img1 === img2) {
            eersteKaart.classList.add("juist");
            tweedeKaart.classList.add("juist");

            setTimeout(() => {
                eersteKaart.classList.add("verborgen");
                tweedeKaart.classList.add("verborgen");
                resetBeurt();
                checkEinde();
            }, 800);
        } else {
            eersteKaart.classList.add("fout");
            tweedeKaart.classList.add("fout");

            setTimeout(() => {
                eersteKaart.classList.remove("omgedraaid", "fout");
                tweedeKaart.classList.remove("omgedraaid", "fout");
                resetBeurt();
            }, 1000);
        }
    };

    const resetBeurt = () => {
        eersteKaart = null;
        tweedeKaart = null;
        isBezig = false;
    };

    const checkEinde = () => {
        let over = document.querySelectorAll(".kaart:not(.verborgen)");
        if (over.length === 0) {
            alert("🎉 Proficiat! Je hebt gewonnen!");
        }
    };

    // START
    maakKaarten();
    bouwSpel();
};

window.addEventListener("load", setup);