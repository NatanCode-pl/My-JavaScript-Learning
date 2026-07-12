const hrPanel = document.querySelector(".hr-panel");
const inputBox = document.querySelector(".input-box");
const complaintsInput = document.querySelector("#complaints-input");
const evaluateBtn = document.querySelector("#evaluate-btn");
const reportBox = document.querySelector(".report-box");
const decisionOutput = document.querySelector("#decision-output");

evaluateBtn.addEventListener("click", function () {
    let skargi = parseInt(complaintsInput.value)

    if (skargi === 0) {
        decisionOutput.innerHTML = "PRZYZNAĆ PREMIĘ!";
        decisionOutput.style.color = "green";
    } else if (1 >= skargi && skargi <= 3) {
        decisionOutput.innerHTML = "Praca Stabilna";
        decisionOutput.style.color = "black";
    } else {
        decisionOutput.innerHTML = "NAGANA I OSTRZERZENIE!";
        decisionOutput.style.color = "red";
    }
    
    console.log("działa!");
});