const clinicPanel = document.querySelector(".clinic-panel");
const patientNameInput = document.querySelector("#patient-name");
const addPatientBtn = document.querySelector("#add-patient-btn");
const queueCount = document.querySelector("#queue-count");
const clinicStatus = document.querySelector("#clinic-status");
const patientsList = document.querySelector("#patients-list");

let kolejka = [];

addPatientBtn.addEventListener("click", function() {
    patientsList.innerHTML = "";
    console.log("działa!")

    let imiePacjenta = patientNameInput.value;

    if (imiePacjenta === "") {
        alert("Wpisz Imię!");
        return;
    }
    console.log("działa IF!");

    kolejka.push(imiePacjenta);
    patientNameInput.value = "";

    queueCount.innerHTML = kolejka.length;

    if (kolejka.length > 4) {
        clinicStatus.innerHTML = "BRAK WOLNYCH MIEJSC NA DZIŚ!";
        clinicStatus.style.color = "red";
         addPatientBtn.disabled = true;
    }
        console.log("działa 2 IF!");

    for (let i = 0; i < kolejka.length; i++) {
        let numerPozycji = i + 1;
        let imieZTablicy = kolejka[i];

        patientsList.innerHTML = "<p>Pozycja" +  numerPozycji + ": " + imieZTablicy + "</p>"
    }

        console.log("działa while!")
});