// Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

const minValue = parseInt(prompt("min value =", "1")!);
const maxValue = parseInt(prompt("max value", "100")!);

let sumValue = 0;
let oddValue = 0;

for (let num = minValue; num < maxValue && oddValue < 5; num++) {
  if (num % 2 !== 0) {
    sumValue += num;
    oddValue++;
    console.log(num);
  }
}
document.write(`Сума 5 непарних чисел = ${sumValue}`);
