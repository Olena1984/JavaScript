// Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

const wishList: string[] = [
  "Мир для України",
  "Поїздка на море",
  "Стати успішним і заможним",
  "Здоров'я для рідних",
  "Відвідати концерт улюбленого гурту",
  "Подорожі по світу",
  "Світ без війн",
];

function getWishEl() {
  const divEl = document.createElement("div");
  const wishIndex = Math.floor(Math.random() * wishList.length);
  divEl.innerText = wishList[wishIndex];
  wishList.splice(wishIndex, 1);
  return divEl;
}

function generateList() {
const parentEl = document.getElementById("wishBlock");
  for (let i = 0; i < 3; i++) {
    const element = getWishEl();
    parentEl?.append(element);
  }
}

window.onload = generateList


// window.onload =  function () {
// const parentEl = document.getElementById("wishBlock");
//   for (let i = 0; i < 3; i++) {
//     const element = getWishEl();
//     parentEl?.append(element);
//   }
// }
