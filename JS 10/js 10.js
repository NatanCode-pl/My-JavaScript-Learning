const warehousePanel = document.querySelector('.warehouse-panel');
// Poprawiłem selektor na właściwy kontener z HTML-a (#boxes-container)
const boxesContainer = document.querySelector('#boxes-container');
const addBoxBtn = document.querySelector('#add-box-btn');
const dispatchBoxBtn = document.querySelector('#dispatch-box-btn');
const priorityCode = document.querySelector('#priority-code');
const warehouseStatus = document.querySelector('#warehouse-status');

let magazyn = ["Paczka Gabaryt", "Paczka Standard"];


addBoxBtn.addEventListener("click", function() {
    let kodPriorytetowy = priorityCode.value.toUpperCase(); 

    if (kodPriorytetowy === "") {
        return;
    }
    
    console.log("działa if!");

    let nazwaDzialu = "";
        
    
    switch (kodPriorytetowy) {
        case "A":
            nazwaDzialu = "Dział Ekspres";
            break; 
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
    priorityCode.value = ""; 

    warehouseStatus.innerHTML = "Przyjęto nową paczkę";

    boxesContainer.innerHTML = "";
    
    for (let i = 0; i < magazyn.length; i++) {
        let nazwaZTablicy = magazyn[i];
        boxesContainer.innerHTML += "<div class='box-item'>📦 " + nazwaZTablicy + "</div>";
    }
    console.log("działa for!");
});


dispatchBoxBtn.addEventListener("click", function() {
    if (magazyn.length === 0) {
        warehouseStatus.innerHTML = "Brak paczek do wydania!";
        return; 
    } else {
        magazyn.pop();
        warehouseStatus.innerHTML = "Wydano paczkę kurierowi!";
    }
    console.log("działa if 2!");

    boxesContainer.innerHTML = "";
    
    for (let i = 0; i < magazyn.length; i++) {
        let nazwaZTablicy = magazyn[i];
        boxesContainer.innerHTML += "<div class='box-item'>📦 " + nazwaZTablicy + "</div>";
    }
    console.log("działa for 2!");
});
