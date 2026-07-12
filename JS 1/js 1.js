const card = document.querySelector(".account-card");
let status = document.querySelector("#status-text");
let DaysOfSub = document.querySelector("#days-counter");
const renew = document.querySelector("#renew-btn");
const cancel = document.querySelector("#cancel-btn");

renew.addEventListener("click", function() {
    let aktualnaLiczbaDni = parseInt(DaysOfSub.innerHTML);
    DaysOfSub.innerHTML = aktualnaLiczbaDni + 30;
        status.innerHTML = "Aktywny"
    status.style.color = "green"
});

cancel.addEventListener("click", function() {
    status.innerHTML = "Nieważny"
    status.style.color = "#e70a0a"
    DaysOfSub.innerHTML = "0"
});

