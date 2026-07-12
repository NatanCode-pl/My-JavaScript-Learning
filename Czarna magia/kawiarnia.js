const przycisk = document.querySelector(".button.button-item");
const bestsellers = document.querySelector(".bestsellers");

przycisk.addEventListener("click", function () {
    bestsellers.scrollIntoView({ behavior: "smooth" });
});

const bestseller = document.querySelector(".bestseller");

bestseller.addEventListener("mouseover", function () {
    bestseller.style.boxShadow = "0 0 10px #da0000";
});

bestseller.addEventListener("mouseout", function () {
    bestseller.style.boxShadow = "none";
});

const form = document.querySelector(".form");
const input = document.querySelector("#user-email");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value == "") {
        alert("Wpisz swoją e-mailę!");
    }
    else {
        alert("Wysłano!");
    }
});