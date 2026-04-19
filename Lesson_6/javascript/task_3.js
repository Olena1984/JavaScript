"use strict";
//  З клавіатури вводиться початкове значення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.
const value = 100;
let numberToSum;
let userSum = parseInt(prompt("Enter your sum:", "25"));
while (userSum < value) {
    let diff = value - userSum;
    numberToSum = parseInt(prompt(`Your sum = ${userSum} is less than ${value}. You need ${diff}: `, "1"));
    userSum += numberToSum;
}
document.write(`Your sum is ${userSum}`);
//# sourceMappingURL=task_3.js.map