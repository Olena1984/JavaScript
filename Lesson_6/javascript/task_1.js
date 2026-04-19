"use strict";
// 1. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.
let sum = 0;
let userNum;
do {
    userNum = parseInt(prompt("Enter your number", "2"));
    sum += userNum;
    if (userNum === 0) {
        break;
    }
} while (userNum !== 0);
// document.write(`<div> Sum = ${sum}</div>`);
alert(`Sum = ${sum}`);
//# sourceMappingURL=task_1.js.map