// Морський бій. Комп’ютер випадковим чином розміщує одиночний корамель на полі 5*5. З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. Спробуйте відоразити гру графічно.

/* 
1. генеруємо рандомне число розміщщення корабля
рядки і колонки - створення констанат
2. створення змінниї на координати пострілу
3. порівняння результатів
4. вивести результати */

let userPosRow: string;
let userPosCol: string;
let userRow;
let userCol;
let count = 0
let win = false;

const rowPosition =1+ Math.floor(Math.random() * (5-1) + 1);
const colPosition =1+ Math.floor(Math.random() * (5 - 1) + 1);
alert(`Гра морський бій!\nПравила гри- ввести № комірки (це координати корабля №рядка і №стовпця).\nГра триває до виграшу. А якщо втомився шукати то натисни "скасувати".\n Бажаю удачі! `)
do {
  userPosRow = prompt("Введіть номер рядка від 1-5", "1");
  userPosCol = prompt("Введіть номер стовпця від 1-5", "1");
  count++
  if (userPosRow === null || userPosCol === null) {
    alert(
      `Ви здаєтеся? Координати корабля: рядок ${rowPosition} * стовпець ${colPosition}`,
    );
    break;
  }
  userRow = parseInt(userPosRow);
  userCol = parseInt(userPosCol);
  if (userRow === rowPosition && userCol === colPosition) {
    win = true;
    break;
  } else {
    alert(`Спробуй ще раз`);
    continue;
  }
} while (true);

document.write(`<div class="game-container">`);
document.write(`<h1> Гра Морський бій</h1>`)
if (win) {
  document.write(
    `<p>Вітаю ви знайшли корабель. Координати: рядок ${rowPosition} * стовпець ${colPosition}.<br> Кількість ваших спроб ${count}</p> `,
  );
} else {
  document.write(
    `<p> Не вгадав. Координати: рядок ${rowPosition} * стовпець ${colPosition}</p>`,
  );
}

document.write(`<table class="game-field"><tbody >`);
for (let row = 1; row < 6; row++) {
  document.write(`<tr class="game-row">`);
  for (let col = 1; col < 6; col++) {
    if (row === rowPosition && col === colPosition) {
        if (win) {
             document.write(`<td class="game-col win"></td>`);
        }else{
            document.write(`<td class="game-col miss"></td>`);
        }
    }
    else {
      document.write(`<td class="game-col"></td>`);
    }
  }
  document.write(`</tr>`);
}
document.write(`</tbody></table>`);

document.write(`</div>`);

// do {
//   userPosRow = prompt("Введіть номер рядка від 1-5", "1");
//   userPosCol = prompt("Введіть номер стовпця від 1-5", "1");
//   if (userPosRow === null || userPosCol === null) {
//     document.write(
//       `<p>Ви здаєтеся? Координати корабля: рядок ${rowPosition} * стовпець ${colPosition}</p>`,
//     );
//     break
//   }
//   if (
//     parseInt(userPosRow) === rowPosition &&
//     parseInt(userPosCol) === colPosition
//   ) {
//      document.write(
//       `<p>Вітаю ви знайшли корабель. Координати: рядок ${rowPosition} * стовпець ${colPosition}</p>`,
//     );
//     break;
//   } else {
//     // document.write(`<p>Спробуй ще раз</p>`);
//     continue
//   }
// } while (true);
