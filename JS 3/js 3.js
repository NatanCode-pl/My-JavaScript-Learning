const cinema = document.querySelector(".cinema-manager");
const generateBtn = document.querySelector("#generate-btn");
let discountCheckbox = document.querySelector("#student-discount");
let ticketsCountInput = document.querySelector("#tickets-count");
let singlePrice = document.querySelector("#single-price");
let totalPrice = document.querySelector("#total-price");
let seatingPlan = document.querySelector("#seating-plan");

generateBtn.addEventListener("click", function() {
    seatingPlan.innerHTML = "";

    let iloscBiletow = parseInt(ticketsCountInput.value);
    let cenaZaBilet = 30;

    if (discountCheckbox.checked === true) {
        cenaZaBilet = 15;
    } else {
       cenaZaBilet = 30;
    }

    singlePrice.innerHTML = cenaZaBilet + "zł"
    totalPrice.innerHTML = (iloscBiletow * cenaZaBilet) + "zł"

        for (let i = 1; i <= iloscBiletow; i++) {
            seatingPlan.innerHTML += '<div class="cinema-seat">' + i + '<div>'
        }
});

 