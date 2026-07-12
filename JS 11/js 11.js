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
    // 1. Blokada na dokładnie 4 elementy
    if (ladownia.length === 4) {
        rocketStatus.innerHTML = "BŁĄD: Ładownia pełna! Rakieta przeciążona!";
        rocketStatus.style.color = "red";
        return; 
    }

    // 2. Pobieramy VALUE (nie innerHTML) z selecta oraz liczbę z inputa
    let wybranyLadunek = cargoType.value;
    let sprawdzanieWagi = parseInt(weightCheck.value);

    let wagaKontenera = 0;
    let pelnaNazwa = "";

    // 3. Switch sprawdza skróty z wartości selecta
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

    // 4. Weryfikacja wagi (czy wpisano poprawną wagę)
    if (sprawdzanieWagi !== wagaKontenera) {
        rocketStatus.innerHTML = "BŁĄD: Niezgodność wagi towaru z deklaracją!";
        rocketStatus.style.color = "yellow";
        return;
    }

    // 5. Jeśli wszystko ok -> dodajemy do tablicy i czyścimy input
    ladownia.push(pelnaNazwa);
    weightCheck.value = "";

    rocketStatus.innerHTML = "Trwa procedura załadunku...";
    rocketStatus.style.color = "green";

    // 6. Aktualizacja licznika kontenerów na ekranie
    cargoCount.innerHTML = ladownia.length;

    // 7. Pętla FOR: Obliczanie wagi na podstawie zawartości tablicy
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
    totalWeight.innerHTML = sumaWag; // Wpisujemy wagę do HTML

    // 8. Pętla WHILE: Liczenie paliwa na czystych liczbach
    let paliwo = 0;
    let wagaDoPrzeliczenia = sumaWag;

    while (wagaDoPrzeliczenia > 0) {
        wagaDoPrzeliczenia = wagaDoPrzeliczenia - 1;
        paliwo = paliwo + 500;
    }
    // Tekst i "litrów" doklejamy dopiero TUTAJ, po zakończeniu obliczeń!
    fuelNeeded.innerHTML = paliwo + " litrów";

    // 9. Renderowanie graficzne kontenerów (czyszczenie + pętla z +=)
    holdContainer.innerHTML = "";
    for (let x = 0; x < ladownia.length; x++) {
        holdContainer.innerHTML += "<div class='cargo-block'>📦 " + ladownia[x] + "</div>";
    }
});