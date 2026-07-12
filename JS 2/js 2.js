const securityPanel = document.querySelector(".security-panel")
const pin = document.querySelector("#pin-input")
const check = document.querySelector("#check-btn")
const error = document.querySelector("#error-msg")
const accept = document.querySelector("#admin-box")

check.addEventListener("click", function(){
    if (pin.value == "1234") {
        accept.classList.remove("hidden")
        accept.innerHTML = "Dostęp przyznany. Witaj w panelu zarządcy."
        accept.style.color = "green"
        error.classList.add("hidden")
    } else {
        error.classList.remove("hidden")
        error.innerHTML = "BŁĄD: Niepoprawny kod PIN!"
        error.style.color = "red"
        accept.classList.add("hidden")
    }
});