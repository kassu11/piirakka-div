const maxHP = document.querySelector("#maxhp");
const currentHP = document.querySelector("#currenthp");
const middleHole = document.querySelector("#middlehole");

const piirakka = document.querySelector("div.pie");
const hptext = document.querySelector("#hptext");


hptext.textContent = currentHP.value + "hp / " + maxHP.value + "hp";
piirakka.style.setProperty("--value", 100 - (currentHP.value / maxHP.value) * 100);

maxHP.addEventListener("input", vaihdaMaxHp);
function vaihdaMaxHp() {
  console.log(maxHP.value);
  currentHP.max = maxHP.value;
  currentHP.value = Math.min(maxHP.value, currentHP.value);
  hptext.textContent = currentHP.value + "hp / " + maxHP.value + "hp";

  piirakka.style.setProperty("--value", 100 - (currentHP.value / maxHP.value) * 100);
}

currentHP.addEventListener("input", vaihdaCurrentHp);
function vaihdaCurrentHp() {
  piirakka.style.setProperty("--value", 100 - (currentHP.value / maxHP.value) * 100);
  hptext.textContent = currentHP.value + "hp / " + maxHP.value + "hp";
}

middleHole.addEventListener("input", vaihdaMiddleHole);
function vaihdaMiddleHole() {
  piirakka.style.setProperty("--reika", middleHole.value);
}