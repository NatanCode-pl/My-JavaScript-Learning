const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto', // Ważne: bierze szerokość 300px z CSS
  loop: true,
  
  coverflowEffect: {
    rotate: 25,        // Delikatniejszy obrót (ładniej wygląda w mniejszym oknie)
    stretch: -20,      // Ujemna wartość sprawia, że slajdy ładnie na siebie nachodzą w środku kontenera
    depth: 150,        // Głębokość efektu 3D
    modifier: 1,       
    slideShadows: true // Efektowne cienie 3D na bocznych kartach
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const przygoda = document.querySelector('.header-button');
przygoda.addEventListener('click', function() {
  destinations.scrollIntoView({ behavior: "smooth" });
  console.log("działa!");
});

/* const nav = document.querySelector(".nav-links");
nav.addEventListener("mouseover", function() {
  nav.style.backgroundColor = "#00d2ff";
  console.log("działa!");
}); 

nav.addEventListener("mouseout", function() {
  nav.style.backgroundColor = "transparent";
  console.log("działa!");
}); */

/* const destinations = document.querySelector("#destinations");
destinations.addEventListener("mouseover", function() {
  destinations.style.transform = "translateY(-10px)";
  destinations.style.boxShadow = "0 0 10px #da0000";
  console.log("działa!");
}); */


const travelForm = document.querySelector("#travel-form");
const destinationSelect = document.querySelector("#destination");
const nightsInput = document.querySelector("#nights");
const participantsInput = document.querySelector("#participants");
const premiumCheckbox = document.querySelector("#premium-guide");
const resultDisplay = document.querySelector("#result-display");
const calcBtn = document.querySelector(".calc-btn"); // kropka, bo w HTML masz class="calc-btn"!
calcBtn.addEventListener("click", function() {
  
  // 1. Tworzymy zmienną na cenę, która na początku wynosi 0
  let cenaZaNoc = 0;
  
  // 2. Sprawdzamy, co użytkownik wybrał w "select" i ustawiamy cenę bazową (czyste liczby!)
  if (destinationSelect.value === "Maldives") {
    cenaZaNoc = 500; // Przykładowo: 500 za noc
  } else if (destinationSelect.value === "France") {
    cenaZaNoc = 150;
  } else if (destinationSelect.value === "Peru") {
    cenaZaNoc = 200;
  } else if (destinationSelect.value === "SouthAfrica") {
    cenaZaNoc = 350;
  } else if (destinationSelect.value === "Japan") {
    cenaZaNoc = 400;
  }
  
  // 3. Pobieramy aktualne liczby wpisane przez użytkownika w okienka
  let iloscNocy = nightsInput.value;
  let iloscOsob = participantsInput.value;
  
  // 4. Robimy główną matematykę (mnożymy czyste liczby)
  let suma = cenaZaNoc * iloscNocy * iloscOsob;
  
  // 5. BONUS: Sprawdzamy nasz checkbox z przewodnikiem Premium
  // Jeśli jest zaznaczony (.checked === true), doliczamy np. 100 za każdą noc
  if (premiumCheckbox.checked === true) {
    suma = suma + (100 * iloscNocy);
  }
  
  // 6. Wyświetlamy wynik na ekranie i DOPIERO TUTAJ doklejamy znaczek $ jako tekst!
  resultDisplay.innerText = "$" + suma + ".00";
  
  console.log("Kalkulator policzył: ", suma);
});



const contact = document.querySelector(".form");
const input = document.querySelector("#email");

contact.addEventListener("submit", function(e) {
  if (input.value == "") {
    e.preventDefault();
    alert("Please provide an email!");
  }
  else {
    alert("Sent!");
  }
  console.log("działa!");
});
