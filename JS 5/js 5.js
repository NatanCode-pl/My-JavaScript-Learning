const gamePanel = document.querySelector(".game-panel");
const controlBox = document.querySelector(".control-box");
const hpInput = document.querySelector("#hp-input");
const spawnBtn = document.querySelector("#spawn-hp-btn");
const statusBox = document.querySelector(".status-box");
const gameStatus = document.querySelector("#game-status");
const hpContainer = document.querySelector("#hp-container");

spawnBtn.addEventListener("click", function() {
    hpContainer.value = "";

    let punktyHp = parseInt(hpInput.value)
    if (punktyHp === 0) {
        gameStatus.innerHTML = "GAME OVER!"
        gameStatus.style.color = "red"
    } else {
        gameStatus.innerHTML = "Zyje!"
        gameStatus.style.color = "yellow"
    }
    

for (let i = 1; i <= punktyHp; i++) {
   hpConatiner.innerHTML += `<div class="hp-block"></div>`;
}
console.log("działa!");

});