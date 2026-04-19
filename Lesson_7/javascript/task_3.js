"use strict";
//  Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.
// 1. Генеруємо рандомні числа
function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
const n1 = getRandomNumber(1, 100);
const n2 = getRandomNumber(1, 100);
const n3 = getRandomNumber(1, 100);
const n4 = getRandomNumber(1, 100);
// document.write(`<p>n1 = ${n1}<br></p>`);
// document.write(`<p>n2 = ${n2}<br></p>`);
// document.write(`<p>n3 = ${n3}<br></p>`);
// document.write(`<p>n4 = ${n4}<br></p>`);
// 2. Створюємо функцію для обчислення суми цих чисел
function getSum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
const sumRes = getSum(n1, n2, n3, n4);
document.write(`<p>Sum = ${sumRes.toFixed(2)}<br>num1 = ${n1}, num2 = ${n2}, num3 = ${n3}, num4 = ${n4}  </p>`);
// 3. Створюємо функцію для обчислення добутку
function getProduct(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4;
}
const resProd = getProduct(n1, n2, n3, n4);
document.write(`<p>Prod = ${resProd.toFixed(2)}<br> num1 = ${n1}, num2 = ${n2}, num3 = ${n3}, num4 = ${n4}</p>`);
// 4.Створюємо функцію для обчислення середнього арифметичного
function getAverage(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}
const resAVR = getAverage(n1, n2, n3, n4);
document.write(`<p>Prod = ${resAVR.toFixed(2)}<br> num1 = ${n1}, num2 = ${n2}, num3 = ${n3}, num4 = ${n4}</p>`);
// 5.Створюємо функцію для знаходження мінімального значення
function getMinValue(num1, num2, num3, num4) {
    let minValue = num1;
    if (minValue > num2)
        minValue = num2;
    if (minValue > num3)
        minValue = num3;
    if (minValue > num4)
        minValue = num4;
    // document.write(`<p> ${minValue}</p>`);
    return minValue;
}
const resMinValue = getMinValue(n1, n2, n3, n4);
document.write(`<p>minValue = ${resMinValue.toFixed(2)}<br> num1 = ${n1}, num2 = ${n2}, num3 = ${n3}, num4 = ${n4}</p>`);
//# sourceMappingURL=task_3.js.map