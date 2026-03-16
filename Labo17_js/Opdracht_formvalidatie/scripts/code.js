const isGetal = (tekst) => !isNaN(tekst);

window.addEventListener("load", () => {
    document.getElementById("valideerBtn").addEventListener("click", () => {

        let allesOk = true;

        const voornaam = document.getElementById("voornaam");
        const familienaam = document.getElementById("familienaam");
        const geboortedatum = document.getElementById("geboortedatum");
        const email = document.getElementById("email");
        const kinderen = document.getElementById("kinderen");

        [voornaam,familienaam,geboortedatum,email,kinderen].forEach(v => {
            v.classList.remove("error");
        });
        document.getElementById("errorVoornaam").textContent = "";
        document.getElementById("errorFamilienaam").textContent = "";
        document.getElementById("errorGeboortedatum").textContent = "";
        document.getElementById("errorEmail").textContent = "";
        document.getElementById("errorKinderen").textContent = "";

        if (voornaam.value.trim().length > 30) {
            voornaam.classList.add("error");
            document.getElementById("errorVoornaam").textContent = "max. 30 karakters";
            allesOk = false;
        }

        if (familienaam.value.trim() === "") {
            familienaam.classList.add("error");
            document.getElementById("errorFamilienaam").textContent = "verplicht veld";
            allesOk = false;
        } else if (familienaam.value.trim().length > 50) {
            familienaam.classList.add("error");
            document.getElementById("errorFamilienaam").textContent = "max 50 karakters";
            allesOk = false;
        }


        const datum = geboortedatum.value.trim();
        if (datum === "") {
            geboortedatum.classList.add("error");
            document.getElementById("errorGeboortedatum").textContent = "verplicht veld";
            allesOk = false;
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(datum)) {
            geboortedatum.classList.add("error");
            document.getElementById("errorGeboortedatum").textContent = "formaat is niet jjjj-mm-dd";
            allesOk = false;
        }

        const mail = email.value.trim();
        const parts = mail.split("@");
        if (mail === "") {
            email.classList.add("error");
            document.getElementById("errorEmail").textContent = "verplicht veld";
            allesOk = false;
        } else if (parts.length !== 2 || parts[0].length < 1 || parts[1].length < 1) {
            email.classList.add("error");
            document.getElementById("errorEmail").textContent = "geen geldig email adres";
            allesOk = false;
        }

        if (!isGetal(kinderen.value) || parseInt(kinderen.value) < 0) {
            kinderen.classList.add("error");
            document.getElementById("errorKinderen").textContent = "is geen positief getal";
            allesOk = false;
        } else if (parseInt(kinderen.value) >= 99) {
            kinderen.classList.add("error");
            document.getElementById("errorKinderen").textContent = "is te vruchtbaar";
            allesOk = false;
        }

        if (allesOk) alert("proficiat!");
    });
});