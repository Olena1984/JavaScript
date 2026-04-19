"use strict";
//  Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.
const minNum = parseInt(prompt("Min number =", "1"));
const maxNum = parseInt(prompt("Max number =", "100"));
let sum = 0;
for (let value = minNum; value < maxNum; value++) {
    if (value % 2 !== 0) {
        sum += value;
        console.log(value);
    }
}
document.write(`Сума всіх непарних чисел ${sum}`);
//# sourceMappingURL=task_10.js.map