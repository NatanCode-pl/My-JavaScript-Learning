const bookingPanel = document.querySelector(".booking-panel");
const formGroup = document.querySelector(".form-group");
const zoneSelect = document.querySelector("#zone-select");
const ticketQuantity = document.querySelector("#ticket-quantity");
const clientAge = document.querySelector("#client-age");
const bookBtn = document.querySelector("#book-btn");
const summaryBox = document.querySelector(".summary-box");
const bookingStatus = document.querySelector("#booking-status");
const totalCost = document.querySelector("#total-cost");
const ticketsPreview = document.querySelector("#tickets-preview");

bookBtn.addEventListener("click", function(e) {
    ticketsPreview.innerHTML = "";

    let liczbaBiletow = parseInt(ticketQuantity.value);
    let wiekKlienta = parseInt(clientAge.value);
    let strefa = zoneSelect.value;

    if (liczbaBiletow < 1 || liczbaBiletow > 5) {
        e.preventDefault();
        bookingStatus.innerHTML = "Błędna liczba biletów (maksymalnie 5)!";
        bookingStatus.style.color = "red";
        totalCost.innerHTML = 0;
        return;
    } else {
        bookingStatus.innerHTML = "Rezerwacja udana!";
        bookingStatus.style.color = "green";
    }

    let cenaBiletu = 0;

    if (strefa === "standard") {
        cenaBiletu = 40;
} else {
    cenaBiletu = 90;
}

    let cenaBiletuPoZnizce = cenaBiletu;

    if (wiekKlienta >= 1 && wiekKlienta <= 18) {
        cenaBiletuPoZnizce = cenaBiletu - 10;
    } else if (wiekKlienta >= 65) {
        cenaBiletuPoZnizce = cenaBiletu - 10;
    }
    

        let cenaOstateczna = liczbaBiletow * cenaBiletuPoZnizce;
        totalCost.innerHTML = cenaOstateczna

        for (let i = 1; i <= liczbaBiletow ; i++) {
            ticketsPreview.innerHTML = "<div class='virtual-ticket'>BILET № " + i + "</div";
        }

        console.log("działa!");
});