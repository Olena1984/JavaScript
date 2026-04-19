"use strict";
// З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.
let totalSum = 0;
let eventCount = 0;
let n = parseInt(prompt("Скільки парних чисел знайти", "3"));
let userNumbers;
while (eventCount < n) {
    userNumbers = parseInt(prompt(`Введіть число`, "0"));
    if (userNumbers % 2 === 0) {
        totalSum += userNumbers;
        eventCount++;
        document.write(`Знайдене парне число ${userNumbers}<br>`);
    }
}
document.write(`<div> Сума усіх парних чисел : ${totalSum} </div>`);
//# sourceMappingURL=task_4.js.map