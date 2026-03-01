const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliderRood = document.getElementsByClassName("slider1");
	let sliderGroen = document.getElementsByClassName("slider2");
	let sliderBlauw = document.getElementsByClassName("slider3");



	console.log(sliderRood);
	console.log(sliderGroen);
	console.log(sliderBlauw);

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliderRood[0].addEventListener("input", update);

	sliderGroen[0].addEventListener("input", update);

	sliderBlauw[0].addEventListener("input", update);


}

const update = () => {
	let sliderRood = document.getElementsByClassName("slider1")[0].value;
	let sliderGroen = document.getElementsByClassName("slider2")[0].value;
	let sliderBlauw = document.getElementsByClassName("slider3")[0].value;

	let colorDemos = document.getElementsByClassName("colorDemo")[0];
	colorDemos.style.backgroundColor = "rgb(" + sliderRood + "," + sliderGroen + "," + sliderBlauw + ")";

}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.


window.addEventListener("load", setup);