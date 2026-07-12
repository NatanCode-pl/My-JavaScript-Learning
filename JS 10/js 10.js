const warehousePanel = document.querySelector('.warehouse-panel');
// Poprawiłem selektor na właściwy kontener z HTML-a (#boxes-container)
const boxesContainer = document.querySelector('#boxes-container');
const addBoxBtn = document.querySelector('#add-box-btn');
const dispatchBoxBtn = document.querySelector('#dispatch-box-btn');
const priorityCode = document.querySelector('#priority-code');
const warehouseStatus = document.querySelector('#warehouse-status');

let magazyn = ["Paczka Gabaryt", "Paczka Standard"];

// PRZYCISK 1: Przyjęcie paczki
addBoxBtn.addEventListener("click", function() {
    let kodPriorytetowy = priorityCode.value.toUpperCase(); // .toUpperCase() zamieni małe "a" na duże "A"

    if (kodPriorytetowy === "") {
        return;
    }
    
    console.log("działa if!");

    let nazwaDzialu = "";
        
    // PERFEKCYJNY SWITCH:
    switch (kodPriorytetowy) {
        case "A":
            nazwaDzialu = "Dział Ekspres";
            break; // Odcinamy, komputer nie czyta dalej
        case "B":
            nazwaDzialu = "Dział Krajowy";
            break;
        case "C":
            nazwaDzialu = "Dział Międzynarodowy";
            break;
        default:
            nazwaDzialu = "Dział Ogólny";
            break;
    }

    console.log("działa switch!");

    magazyn.push(nazwaDzialu);
    priorityCode.value = ""; // Poprawne czyszczenie okienka na stronie!

    warehouseStatus.innerHTML = "Przyjęto nową paczkę";

    boxesContainer.innerHTML = "";
    // Pętla z .length oraz +=
    for (let i = 0; i < magazyn.length; i++) {
        let nazwaZTablicy = magazyn[i];
        boxesContainer.innerHTML += "<div class='box-item'>📦 " + nazwaZTablicy + "</div>";
    }
    console.log("działa for!");
});

// PRZYCISK 2: Wydanie paczki
dispatchBoxBtn.addEventListener("click", function() {
    if (magazyn.length === 0) {
        warehouseStatus.innerHTML = "Brak paczek do wydania!";
        return; // Zatrzymujemy funkcję, żeby nie robić .pop() na pustej tablicy
    } else {
        magazyn.pop();
        warehouseStatus.innerHTML = "Wydano paczkę kurierowi!";
    }
    console.log("działa if 2!");

    boxesContainer.innerHTML = "";
    // Pętla z .length oraz +=
    for (let i = 0; i < magazyn.length; i++) {
        let nazwaZTablicy = magazyn[i];
        boxesContainer.innerHTML += "<div class='box-item'>📦 " + nazwaZTablicy + "</div>";
    }
    console.log("działa for 2!");
});