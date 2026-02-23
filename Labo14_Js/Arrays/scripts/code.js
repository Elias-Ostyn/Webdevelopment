const setup = () => {

    const famillieleden = ['elias','tom','mieke','yanis','rune'];
    console.log(famillieleden.length);
    console.log(famillieleden[0]);
    console.log(famillieleden[2]);
    console.log(famillieleden[4]);

    let result = famillieleden.join(", ");

    console.log(result);
// "appel, banaan, peer"


}
window.addEventListener("load", setup);
