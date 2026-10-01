const setup = () => {
	let sliderRood = document.getElementsByClassName("sliderRood");
	let sliderGroen = document.getElementsByClassName("sliderGroen");
	let sliderBlauw = document.getElementsByClassName("sliderBlauw");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliderRood[0].addEventListener("change", update);
	sliderRood[0].addEventListener("input", update);

	// groen
	sliderGroen[0].addEventListener("change", update);
	sliderGroen[0].addEventListener("input", update);

	sliderBlauw[0].addEventListener("change", update);
	sliderBlauw[0].addEventListener("input", update);

}

const update = () => {
	// de sliders
	let sliderRood = document.getElementsByClassName("sliderRood");
	let sliderGroen = document.getElementsByClassName("sliderGroen");
	let sliderBlauw = document.getElementsByClassName("sliderBlauw");

	// value
	let sliderRoodValue =sliderRood[0].value;
	let sliderGroenValue =sliderGroen[0].value;
	let sliderBlauwValue =sliderBlauw[0].value;

	console.log("de waarde van de sliderRood is momenteel : "+ sliderRoodValue);
	console.log("de waarde van de sliderGroen is momenteel : "+ sliderGroenValue);
	console.log("de waarde van de sliderBlauw is momenteel : "+ sliderBlauwValue);

	// we stoppen onze kleuren bij de update dus hier gaan we da vakje doen

	let vakje = document.getElementsByClassName("colorDemo");

	vakje[0].style.backgroundColor = "rgb(" + sliderRoodValue + "," + sliderGroenValue + "," + sliderBlauwValue + ")";
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);