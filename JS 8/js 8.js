const pumpStation = document.querySelector(".pump-station");
const fuelInput = document.querySelector("#fuel-input");
const startPumpBtn = document.querySelector("#start-pump-btn");
const pumpStatus = document.querySelector("#pump-status");
const pumpLog = document.querySelector("#pump-log");

startPumpBtn.addEventListener("click", function() {
    pumpLog.innerHTML = "";
    console.log("działa!");

    let paliwo = parseInt(fuelInput.value)

    if (paliwo <= 0) {
        pumpStatus.innerHTML = "BŁĄD: Bak jest już pusty!";
        pumpStatus.style.color = "red";
        return;
    } else {
        pumpStatus.innerHTML = "Pompowanie zakończone sukcesem!";
        pumpStatus.style.color = "green";

    }
    console.log("działa IF!")


    while (paliwo > 0) {
        paliwo = paliwo - 10;

        if (paliwo < 0) {
            paliwo = 0;
        }

        pumpLog.innerHTML += "<p>Odessano 10L. W baku zostało: " + paliwo + " litrów.</p>";
    }

    console.log("działa WHILE!");
});