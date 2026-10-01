const global = {
    AANTAL_KAARTEN: 6,
    afbeeldingen: [
        "afro sam.jpg",
        "ducati-panigale-v4-r-iq-2560x1600.jpg",
        "gojo.jpg",
        "gojo-unleashed-power-of-the-six-eyes-kv-2560x1600.jpg",
        "jin woo.jpg",
        "who_Decided.jpg"
    ],
    isBusy: false,
    eersteKaart: null
};

const klikOpKaart = (event) => {
    const kaart = event.target;

    if (global.isBusy) return;
    if (kaart.src.includes(kaart.dataset.afbeelding)) return;
    if (kaart.classList.contains("verwijderd")) return;

    kaart.src = "images/" + kaart.dataset.afbeelding;

    if (!global.eersteKaart) {
        global.eersteKaart = kaart;
    } else {
        global.isBusy = true;
        document.body.classList.add("busy");

        const eersteAfbeelding = global.eersteKaart.dataset.afbeelding;
        const tweedeAfbeelding = kaart.dataset.afbeelding;

        if (eersteAfbeelding === tweedeAfbeelding) {
            global.eersteKaart.classList.add("goed");
            kaart.classList.add("goed");

            setTimeout(() => {
                global.eersteKaart.classList.add("verwijderd");
                kaart.classList.add("verwijderd");
                global.eersteKaart.classList.remove("goed");
                kaart.classList.remove("goed");

                global.eersteKaart = null;
                global.isBusy = false;
                document.body.classList.remove("busy");
            }, 1000);
        } else {
            global.eersteKaart.classList.add("fout");
            kaart.classList.add("fout");

            setTimeout(() => {
                global.eersteKaart.src = "images/wallpapper.jpg";
                kaart.src = "images/wallpapper.jpg";
                global.eersteKaart.classList.remove("fout");
                kaart.classList.remove("fout");

                global.eersteKaart = null;
                global.isBusy = false;
                document.body.classList.remove("busy");
            }, 1000);
        }
    }
};

const maakKaarten = () => {
    let kaarten = [...global.afbeeldingen, ...global.afbeeldingen];
    kaarten.sort(() => Math.random() - 0.5);
    return kaarten;
};

const bouwSpeelveld = (kaarten) => {
    const speelveld = document.getElementById("speelveld");
    speelveld.textContent = "";

    kaarten.forEach((afbeelding) => {
        const img = document.createElement("img");
        img.src = "images/wallpapper.jpg";
        img.dataset.afbeelding = afbeelding;
        img.classList.add("kaart");
        speelveld.appendChild(img);
        img.addEventListener("click", klikOpKaart);
    });
};

const setup = () => {
    document.getElementById("startBtn").addEventListener("click", () => {
        global.isBusy = false;
        global.eersteKaart = null;
        const kaarten = maakKaarten();
        bouwSpeelveld(kaarten);
    });
};

window.addEventListener("load", setup);