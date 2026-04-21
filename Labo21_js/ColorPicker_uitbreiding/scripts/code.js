let kleurenArray = [];

const setup = () => {
	let sliderRood = document.getElementsByClassName("slider1")[0];
	let sliderGroen = document.getElementsByClassName("slider2")[0];
	let sliderBlauw = document.getElementsByClassName("slider3")[0];

	sliderRood.addEventListener("input", update);
	sliderGroen.addEventListener("input", update);
	sliderBlauw.addEventListener("input", update);

	document.getElementById("saveColor").addEventListener("click", saveColor);

	loadColors();
};

window.addEventListener("load", setup);

const loadColors = () => {
	let data = localStorage.getItem("colors");

	if (data) {
		kleurenArray = JSON.parse(data);

		let laatsteKleur = kleurenArray[kleurenArray.length - 1];

		if (laatsteKleur) {
			applyColor(laatsteKleur);
		}
	}

	opnieuwLaden();
};

const update = () => {
	let r = document.getElementsByClassName("slider1")[0].value;
	let g = document.getElementsByClassName("slider2")[0].value;
	let b = document.getElementsByClassName("slider3")[0].value;

	document.getElementsByClassName("colorDemo")[0].style.backgroundColor = `rgb(${r},${g},${b})`;

	document.getElementById("valueR").textContent = r;
	document.getElementById("valueG").textContent = g;
	document.getElementById("valueB").textContent = b;
};

const saveColor = () => {
	let r = document.getElementsByClassName("slider1")[0].value;
	let g = document.getElementsByClassName("slider2")[0].value;
	let b = document.getElementsByClassName("slider3")[0].value;

	let kleur = `rgb(${r},${g},${b})`;

	kleurenArray.push(kleur);

	localStorage.setItem("colors", JSON.stringify(kleurenArray));

	applyColor(kleur);
	opnieuwLaden();
};

const applyColor = (kleur) => {
	let parts = kleur.match(/\d+/g);

	let r = parts[0];
	let g = parts[1];
	let b = parts[2];

	document.getElementsByClassName("slider1")[0].value = r;
	document.getElementsByClassName("slider2")[0].value = g;
	document.getElementsByClassName("slider3")[0].value = b;

	document.getElementsByClassName("colorDemo")[0].style.backgroundColor = kleur;

	document.getElementById("valueR").textContent = r;
	document.getElementById("valueG").textContent = g;
	document.getElementById("valueB").textContent = b;
};

const opnieuwLaden = () => {
	let container = document.getElementsByClassName("savedColors")[0];

	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	kleurenArray.forEach((kleur) => {
		let box = document.createElement("div");
		box.classList.add("colorBox");
		box.style.backgroundColor = kleur;

		let deleteBtn = document.createElement("span");
		deleteBtn.innerHTML = "x";
		deleteBtn.classList.add("deleteBtn");

		deleteBtn.addEventListener("click", () => {
			verwijderKleur(kleur);
		});

		box.appendChild(deleteBtn);
		container.appendChild(box);
	});
};

const verwijderKleur = (kleur) => {
	for (let i = 0; i < kleurenArray.length; i++) {
		if (kleurenArray[i] === kleur) {
			kleurenArray.splice(i, 1);
			break;
		}
	}

	localStorage.setItem("colors", JSON.stringify(kleurenArray));
	opnieuwLaden();
};