const rocketStatus = document.getElementById('rocket-status');
const cargoCount = document.getElementById('cargo-count');
const totalWeight = document.getElementById('total-weight');
const fuelNeeded = document.getElementById('fuel-needed');
const holdContainer = document.getElementById('hold-container');
const loadCargoBtn = document.getElementById('load-cargo-btn');
const weightCheck = document.getElementById('weight-check');
const cargoType = document.getElementById('cargo-type');

let ladownia = [];

loadCargoBtn.addEventListener("click", function() {
   
    if (ladownia.length === 4) {
        rocketStatus.innerHTML = "BŁĄD: Ładownia pełna! Rakieta przeciążona!";
        rocketStatus.style.color = "red";
        return; 
    }

    
    let wybranyLadunek = cargoType.value;
    let sprawdzanieWagi = parseInt(weightCheck.value);

    let wagaKontenera = 0;
    let pelnaNazwa = "";

    
    switch (wybranyLadunek) {
        case "SCI":
            wagaKontenera = 10;
            pelnaNazwa = "Kontener Naukowy";
            break;
        case "MED":
            wagaKontenera = 20;
            pelnaNazwa = "Kontener Medyczny";
            break;
        case "GOLD":
            wagaKontenera = 40;
            pelnaNazwa = "Kontener Złota";
            break;
    }

   
    if (sprawdzanieWagi !== wagaKontenera) {
        rocketStatus.innerHTML = "BŁĄD: Niezgodność wagi towaru z deklaracją!";
        rocketStatus.style.color = "yellow";
        return;
    }

    
    ladownia.push(pelnaNazwa);
    weightCheck.value = "";

    rocketStatus.innerHTML = "Trwa procedura załadunku...";
    rocketStatus.style.color = "green";

    
    cargoCount.innerHTML = ladownia.length;

    
    let sumaWag = 0;
    for (let i = 0; i < ladownia.length; i++) {
        if (ladownia[i] === "Kontener Naukowy") {
            sumaWag += 10;
        } else if (ladownia[i] === "Kontener Medyczny") {
            sumaWag += 20;
        } else if (ladownia[i] === "Kontener Złota") {
            sumaWag += 40;
        }
    }
    totalWeight.innerHTML = sumaWag; 

    
    let paliwo = 0;
    let wagaDoPrzeliczenia = sumaWag;

    while (wagaDoPrzeliczenia > 0) {
        wagaDoPrzeliczenia = wagaDoPrzeliczenia - 1;
        paliwo = paliwo + 500;
    }
    
    fuelNeeded.innerHTML = paliwo + " litrów";

    
    holdContainer.innerHTML = "";
    for (let x = 0; x < ladownia.length; x++) {
        holdContainer.innerHTML += "<div class='cargo-block'>📦 " + ladownia[x] + "</div>";
    }
});
