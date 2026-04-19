// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

function createTable(rowNum: number, colNum: number, message: string) {
  document.write(`<table>`);
  for (let row = 0; row < rowNum; row++) {
    document.write(`<tr>`);
    for (let col = 0; col < colNum; col++) {
      document.write(`<td>`);
      document.write(`${message}`);
      document.write(`</td>`);
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
}
const rows = parseInt(prompt("Enter rows number ", "5")!);
const cols = parseInt(prompt("Enter cols number ", "5")!);
const message = prompt("Enter your message", "Hello")!;
createTable(rows, cols, message);
