const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	let knop = document.getElementById("button");
	knop.addEventListener("click", save);
};

const update = () => {
	let red = document.getElementById("sldRed").value; //input always value
	let green =document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	
	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};
const save = () =>{
	let swatch = document.getElementById("swatch");
	let nieuweswatch = document.createElement("div");

	nieuweswatch.classList.add("swatch");
	nieuweswatch.style.backgroundColor = swatch.style.backgroundColor;
	document.getElementById("savedSwatches").appendChild(nieuweswatch);


	let kruisje = document.createElement("span")
	kruisje.innerHTML= "&times;";
	kruisje.classList.add("delete");

	kruisje.addEventListener("click", () => {
		nieuweswatch.remove();
	})

	nieuweswatch.appendChild(kruisje);
}
window.addEventListener("load", setup);