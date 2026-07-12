const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto', 
  
  coverflowEffect: {
    rotate: 25,        
    stretch: -20,      
    depth: 150,        
    modifier: 1,       
    slideShadows: true 
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


const travelForm = document.querySelector("#travel-form");
const destinationSelect = document.querySelector("#destination");
const nightsInput = document.querySelector("#nights");
const participantsInput = document.querySelector("#participants");
const premiumCheckbox = document.querySelector("#premium-guide");
const resultDisplay = document.querySelector("#result-display");
const calcBtn = document.querySelector(".calc-btn"); 
calcBtn.addEventListener("click", function() {
  

  let cenaZaNoc = 0;
  

  if (destinationSelect.value === "Maldives") {
    cenaZaNoc = 500; 
  } else if (destinationSelect.value === "France") {
    cenaZaNoc = 150;
  } else if (destinationSelect.value === "Peru") {
    cenaZaNoc = 200;
  } else if (destinationSelect.value === "SouthAfrica") {
    cenaZaNoc = 350;
  } else if (destinationSelect.value === "Japan") {
    cenaZaNoc = 400;
  }
  

  let iloscNocy = nightsInput.value;
  let iloscOsob = participantsInput.value;
  

  let suma = cenaZaNoc * iloscNocy * iloscOsob;
  
  
  if (premiumCheckbox.checked === true) {
    suma = suma + (100 * iloscNocy);
  }
  
  
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
