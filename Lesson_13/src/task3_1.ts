/* 
Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.
*/

const row: number = 3;
const col: number = 3;
const halfRow: number = Math.floor(row / 2);
const halfCol: number = Math.floor(col / 2);

// ===================================================
// генерація ігрового поля
function gameField(row: number, col: number): string[][] {
  return Array.from({ length: row }, () =>
    Array.from<string>({ length: col }).fill(" "),
  );
}
const fieldForGame = gameField(row, col);
// заповнення поля хрестиками і нуликами
function fillGameField(array: string[][]): void {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let randSell = Math.random();
      if (randSell < 0.33) {
        array[i][j] = "X";
      } else if (randSell < 0.66) {
        array[i][j] = "0";
      }
    }
  }
}
const resGameTable = fillGameField(fieldForGame);

// =========================================================
// візуалізація поля
document.write(`<table class="field-game">`);
function printTable(arr: string[][]) {
  for (let i = 0; i < arr.length; i++) {
    document.write(`<tr class="rows">`);
    for (let j = 0; j < arr[i].length; j++) {
      document.write(`<td class="cols">${arr[i][j]}</td>`);
    }
    document.write(`</tr>`);
  }
}
const table = printTable(fieldForGame);
document.write(`</table>`);
console.log(fieldForGame);
// ===============================================

// ==============================================
// рекурсія



