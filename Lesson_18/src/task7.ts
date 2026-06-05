// Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

// transport
const payForBus: number = 1000;
const payForCar: number = 2000;
const payForPlane: number = 3000;

// food
const breakfast: number = 800;
const lunch: number = 500;
const dinner: number = 700;

// guide
const guide1 = 1500;
const guide2 = 1800;
const guide3 = 2000;

function countTrip() {
  let total: number = 0;
  const transport = document.getElementById("transport") as HTMLSelectElement;
  total += parseInt(transport.value);

  const breakfast = document.getElementById("breakfast") as HTMLInputElement;
  const lunch = document.getElementById("lunch") as HTMLInputElement;
  const dinner = document.getElementById("dinner") as HTMLInputElement;
  if (breakfast.checked) {
    total += parseInt(breakfast.value);
  }
  if (lunch.checked) {
    total += parseInt(lunch.value);
  }
  if (dinner.checked) {
    total += parseInt(dinner.value);
  }

  const selectedGuide = document.querySelector(
    'input[name= "guide"]:checked',
  ) as HTMLInputElement;
  if (selectedGuide) {
    total += parseInt(selectedGuide.value);
  }
  const parentEl = document.getElementById("pay") as HTMLBaseElement;
  parentEl.innerText = (`Ваша подорож буде коштувати: ${total.toString()}`);
  console.log(total);

  return total;
}

const btnCount = document.getElementById("count") as HTMLButtonElement;
btnCount.onclick = countTrip;
