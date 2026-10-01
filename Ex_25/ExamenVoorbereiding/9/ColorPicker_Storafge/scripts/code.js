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

	const opgeslagenkleuren = JSON.parse(localStorage.getItem("kleur"));
	if(opgeslagenkleuren !== null){
		document.getElementById("sldRed").value = opgeslagenkleuren.red;
		document.getElementById("sldBlue").value = opgeslagenkleuren.blue;
		document.getElementById("sldGreen").value = opgeslagenkleuren.green;
		update();
	}

	opgeslagenFavo();

};

const opgeslagenFavo = () => {
	const op = JSON.parse(localStorage.getItem("favorieten")) ?? [];
	op.forEach(kleur => maakSwatch(kleur));
};

const maakSwatch = (kleur) => {
	let nieuweswatch = document.createElement("div");
	nieuweswatch.classList.add("swatch");
	nieuweswatch.style.backgroundColor = kleur;
	document.getElementById("savedSwatches").appendChild(nieuweswatch);

	let kruisje = document.createElement("span");
	kruisje.innerHTML = "&times;";
	kruisje.classList.add("delete");
	kruisje.addEventListener("click", () => {
		nieuweswatch.remove();
		// favorieten bijwerken in localStorage
		const favorieten = JSON.parse(localStorage.getItem("favorieten")) ?? [];
		const bijgewerkt = favorieten.filter(f => f !== kleur);
		localStorage.setItem("favorieten", JSON.stringify(bijgewerkt));
	});
	nieuweswatch.appendChild(kruisje);
};

const update = () => {
	let red = document.getElementById("sldRed").value; //input always value
	let green =document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;

	localStorage.setItem("kleur",JSON.stringify({
		red: red,
		green: green,
		blue: blue,
	}));
	
	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};
const save = () =>{
	const kleur = document.getElementById("swatch").style.backgroundColor;
	maakSwatch(kleur); // ← alleen dit, geen eigen swatch meer
	const favorieten = JSON.parse(localStorage.getItem("favorieten")) ?? [];
	favorieten.push(kleur);
	localStorage.setItem("favorieten", JSON.stringify(favorieten));
}
window.addEventListener("load", setup);