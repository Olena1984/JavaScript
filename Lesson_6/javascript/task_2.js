"use strict";
// З клавіатури вводитяться числа поки не буде введено 0. Знайти добуток чисел.
let product = 1;
let userNumber;
do {
    userNumber = parseInt(prompt("Enter your number", "2"));
    if (userNumber === 0) {
        break;
    }
    product *= userNumber;
} while (userNumber !== 0 && userNumber > 0);
alert(`The product of the numbers is: ${product}`);
//# sourceMappingURL=task_2.js.map