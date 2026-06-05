"use strict";
// Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.
// transport
const payForBus = 1000;
const payForCar = 2000;
const payForPlane = 3000;
// food
const breakfast = 800;
const lunch = 500;
const dinner = 700;
// guide
const guide1 = 1500;
const guide2 = 1800;
const guide3 = 2000;
function countTrip() {
    let total = 0;
    const transport = document.getElementById("transport");
    total += parseInt(transport.value);
    const breakfast = document.getElementById("breakfast");
    const lunch = document.getElementById("lunch");
    const dinner = document.getElementById("dinner");
    if (breakfast.checked) {
        total += parseInt(breakfast.value);
    }
    if (lunch.checked) {
        total += parseInt(lunch.value);
    }
    if (dinner.checked) {
        total += parseInt(dinner.value);
    }
    const selectedGuide = document.querySelector('input[name= "guide"]:checked');
    if (selectedGuide) {
        total += parseInt(selectedGuide.value);
    }
    const parentEl = document.getElementById("pay");
    parentEl.innerText = (`Ваша подорож буде коштувати: ${total.toString()}`);
    console.log(total);
    return total;
}
const btnCount = document.getElementById("count");
btnCount.onclick = countTrip;
//# sourceMappingURL=task7.js.map