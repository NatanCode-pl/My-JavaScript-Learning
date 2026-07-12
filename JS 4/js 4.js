const airport = document.querySelector(".airport-app");
const luggageWeight = document.querySelector(".input-box");
const weight = document.querySelector("#luggage-weight");
const btn = document.querySelector("#check-luggage-btn");
const resultBox = document.querySelector("#result-box");
const status = document.querySelector("#status-output");
const output = document.querySelector("#fee-output");

btn.addEventListener("click", function() {
    let wagaWalizki = parseInt(weight.value);
    let tekstStatusu = "";
    let kwotaDoplaty = 0;
    
    if (wagaWalizki > 20) {
        tekstStatusu = "NADBAGAŻ!";
        kwotaDoplaty = (wagaWalizki - 20) * 15;
    } else {
        tekstStatusu = "WAGA POPRAWNA!";
        kwotaDoplaty = 0;
    }

    status.innerHTML = tekstStatusu;
    output.innerHTML = kwotaDoplaty;
});