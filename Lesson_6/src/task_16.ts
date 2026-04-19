// Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). При влучанні броня танка пошкоджується на 30 балів (всього 100). Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.

/* 
1. створення знінних:координати танка, броня танка, кількість куль, координати переміщення танка
2. Запит гравця на постріл
3. опрацювання і вивід результату пострілу
4. якщо промазав - генерую зміну координат танка і продовження гри
5. якщо влучив - зменшую бали танка
6. позиції переміщення танка: -1, 0, 1 (0, 1, 2)
*/

let tankHealth = 100;
let damage = 30;
let tankRowMove: number;
let tankColMove: number;
let userShotRow: number;
let userShotCol: number;
let userWin = false;

let tankRow = 1 + Math.floor(Math.random() * (10 - 1) + 1);
let tankCol = 1 + Math.floor(Math.random() * (10 - 1) + 1);
let shells = parseInt(prompt("Введіть кількість снарядів", "5")!);

do {
  userShotRow = parseInt(prompt("Введіть № рядка від 1-10", "5")!);
  userShotCol = parseInt(prompt("Введіть № стовпця від 1-10", "5")!);
  shells--;
  if (userShotRow === tankRow && userShotCol === tankCol) {
    userWin = true;
    tankHealth = tankHealth - damage;
    alert(
      `Вітаю ви влучили у танк. Координати: рядокк ${tankRow} стовпець ${tankCol}.\nБроня танка пошкоджена на ${tankHealth} балів`,
    );
    break;
  } else if (shells === 0) {
    alert(
      `Ваші снаряди закінчилися. Танк знаходився у рядку ${tankRow} та стовпці ${tankCol}`,
    );
  } else {
    // координати переміщення танка
    tankRowMove = -1 + Math.floor(Math.random() * (1 - -1 + 1));
    tankColMove = -1 + Math.floor(Math.random() * (1 - -1 + 1));

    tankRow += tankRowMove;
    tankCol += tankColMove;

    if (tankRow < 1) tankRow = 1;
    if (tankRow > 10) tankRow = 10;
    if (tankCol < 1) tankCol = 1;
    if (tankCol > 10) tankCol = 10;

    alert(`Не влучив, спробуй ще раз`);
  }
} while (!userWin && shells > 0);
// =========================

// Роз'язок за умови, що гра закінчиться коли танк буде повністю знищений, або закінчаться снаряди. Дані ті самі, лише роз'взок інший
// do {
//   userShotRow = parseInt(prompt("Введіть № рядка від 1-10", "5")!);
//   userShotCol = parseInt(prompt("Введіть № стовпця від 1-10", "5")!);
//   shells--;
//   if (userShotRow === tankRow && userShotCol === tankCol) {
//     tankHealth -= damage;
//     let persentDamage = 100 - ta;
//     alert(
//       `Вітаю, ви влучили у танк! Пошкодження танку становить ${persentDamage}%.`,
//     );
//     if (tankHealth <= 0) {
//       userWin = true;
//       alert("Вітаю танк знищено");
//       break;
//     }
//   } else {
//     // зміна координат танка
//     tankRowMove = -1 + Math.floor(Math.random() * (1 - -1 + 1));
//     tankColMove = -1 + Math.floor(Math.random() * (1 - -1 + 1));

//     tankRow += tankRowMove;
//     tankCol += tankColMove;

//     if (tankRow < 1) tankRow = 1;
//     if (tankRow > 10) tankRow = 10;
//     if (tankCol < 1) tankCol = 1;
//     if (tankCol > 10) tankCol = 10;

//     alert("Ваш наступний постріл");
//   }

// } while (tankHealth > 0 && shells > 0);
// if (tankHealth > 0 && !userWin) {
//   alert(
//     `Гру завершено. Танк не пошкоджений Координати розташування танку рядок ${tankRow}, стовпець ${tankCol}`,
//   );
// }

document.write(`<div class="game-container">`);
document.write(`<h1> Гра танчики </h1>`);
document.write(`<table class="field"><tbody>`);
for (let row = 1; row <= 10; row++) {
  document.write(`<tr>`);
  for (let col = 1; col <= 10; col++) {
    if (row === tankRow && col === tankCol) {
      if (userWin) {
        document.write(`<td class="col yes"></td>`);
        document.write(
          `<p>Вітаю ви влучили у танк. Координати: рядокк ${tankRow} стовпець ${tankCol}.\nБроня танка пошкоджена на ${tankHealth} балів</p> `,
        );
      } else {
        document.write(`<td class="col no"></td>`);
        document.write(
          `<p> Ваші снаряди закінчилися. Танк знаходився у рядку ${tankRow} та стовпці ${tankCol}</p>`,
        );
      }
    } else {
      document.write(`<td class="col"></td>`);
    }
  }
  document.write(`</tr>`);
}
document.write(`</table></tbody>`);

document.write(`</div>`);
