// З клавіатури вводиться число. Знаходити суму цифр до тих пір. Поки сума не стане більшую за 20.

let sum = 0;
let number: number;

while (sum < 20) {
  number = parseInt(prompt("Введіть число:", "1")!);
  if (sum + number < 20) {
    sum = sum + number;
  } else {
    break;
  }
}
document.write(`sum= ${sum}`)
