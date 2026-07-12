const my = document.querySelector("#link-o-nas");

my.addEventListener("click", function () {
    document.querySelector("#link-o-nas").style.backgroundColor = "#6d1ab1";
    document.querySelector("#link-o-nas").style.color = "#ffffff";
    console.log("Działa!");
});

const doktor = document.querySelector(".dr");

doktor.addEventListener("mouseover", function () {
    document.querySelector(".dr").innerHTML = "Ordynator KlinikMed";
    console.log("Działa!");
});

doktor.addEventListener("mouseout", function () {
    document.querySelector(".dr").innerHTML = "Dr Adam Nowicki";
    console.log("Działa!");
});

const form = document.querySelector(".form");
const input = document.querySelector(".input");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value == "") {
        alert("Wpisz swój e-mail!");
    }
    else {
        alert("Wysłano!");
    }
    console.log("Działa!");
});
