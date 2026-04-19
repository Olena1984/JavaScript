"use strict";
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
// 1. Перший варіант розв'язку - генеруємо рандомно 3 числа
function getRandNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
const number1 = getRandNum(-500, 500);
const number2 = getRandNum(-500, 500);
const number3 = getRandNum(-500, 500);
function getAllResults(num1, num2, num3) {
    let even = 0;
    let positiveNum = 0;
    let bigNum = 0;
    function checkNumber(n) {
        if (n % 2 === 0)
            even++;
        if (n > 0)
            positiveNum++;
        if (n > 100)
            bigNum++;
    }
    checkNumber(num1);
    checkNumber(num2);
    checkNumber(num3);
    return `Число 1 = ${number1}\nЧисло 2 = ${number2}\nЧисло 3 = ${number3}\nКількість парних чисел - ${even}.\nКількість додатніх чисел - ${positiveNum}.\nКількість чисел >100 - ${bigNum}.`;
}
const res = getAllResults(number1, number2, number3);
alert(`${res}`);
// Другий довший варіант роз'язку, і запит чисел через промпт
// function getThreeParameters(
//   num1: number,
//   num2: number,
//   num3: number,
// ): string {
//   let even: number = 0;
//   let positiveNum: number = 0;
//   let bigNum: number = 0;
//   if (num1 % 2 === 0) even++;
//   if (num2 % 2 === 0) even++;
//   if (num3 % 2 === 0) even++;
//   if (num1 > 0) positiveNum++;
//   if (num2 > 0) positiveNum++;
//   if (num3 > 0) positiveNum++;
//   if (num1 > 100) bigNum++;
//   if (num2 > 100) bigNum++;
//   if (num3 > 100) bigNum++;
//   return `Парних чисел = ${even}, додатніх чисел = ${positiveNum}, більших за 100 = ${bigNum}`;
// }
// const num1 = parseInt(prompt("Enter number", "20")!);
// const num2 = parseInt(prompt("Enter number", "20")!);
// const num3 = parseInt(prompt("Enter number", "20")!);
// const result = getThreeParameters(num1, num2, num3);
// alert(`${result}\nчисло 1 = ${num1}\nчисло 2 = ${num2}\nчисло 3 = ${num3}`)
//# sourceMappingURL=task_4.js.map