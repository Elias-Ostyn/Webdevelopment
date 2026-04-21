const setup = () => {
	let sliderRood = document.getElementsByClassName("slider1");
	let sliderGroen = document.getElementsByClassName("slider2");
	let sliderBlauw = document.getElementsByClassName("slider3");

	sliderRood[0].addEventListener("input", update);
	sliderGroen[0].addEventListener("input", update);
	sliderBlauw[0].addEventListener("input", update);

	document.getElementById("saveColor").addEventListener("click", saveColor);
	document.getElementById("FavoKleur").addEventListener("click", favoriet);
}




const update = () => {
	let sliderRood = document.getElementsByClassName("slider1")[0].value;
	let sliderGroen = document.getElementsByClassName("slider2")[0].value;
	let sliderBlauw = document.getElementsByClassName("slider3")[0].value;

	// kleurblok aanpassen
	let colorDemos = document.getElementsByClassName("colorDemo")[0];
	colorDemos.style.backgroundColor = "rgb(" + sliderRood + "," + sliderGroen + "," + sliderBlauw + ")";

	// waarden naast sliders tonen
	document.getElementById("valueR").textContent = sliderRood;
	document.getElementById("valueG").textContent = sliderGroen;
	document.getElementById("valueB").textContent = sliderBlauw;
}


const saveColor = () => {
	let r = document.getElementsByClassName("slider1")[0].value;
	let g = document.getElementsByClassName("slider2")[0].value;
	let b = document.getElementsByClassName("slider3")[0].value;

	let kleur = "rgb(" + r + "," + g + "," + b + ")";

	let container = document.getElementsByClassName("savedColors")[0];

	// maak nieuw blokje
	let box = document.createElement("div");
	box.classList.add("colorBox");
	box.style.backgroundColor = kleur;

	// delete knop
	let deleteBtn = document.createElement("span");
	deleteBtn.innerHTML = "x";
	deleteBtn.classList.add("deleteBtn");

	deleteBtn.addEventListener("click", () => {
		box.remove();
	});

	box.appendChild(deleteBtn);
	container.appendChild(box);
}


const favoriet = () => {
		let r = document.getElementsByClassName("slider1")[0].value;
		let g = document.getElementsByClassName("slider2")[0].value;
		let b = document.getElementsByClassName("slider3")[0].value;

		let kleur = {
			rood: r,
			groen: g,
			blauw: b
		};

		localStorage.setItem("favorieteKleur", JSON.stringify(kleur));


}


window.addEventListener("load", setup);