"use strict";
// Користувач загадує число . Комп’ютер задає питання поки не вгадає число користувача 
const userNumber = 5;
let count = 0;
let compNum;
do {
    compNum = 1 + Math.floor(Math.random() * 10);
    count++;
} while (!confirm(`Загадане число ${compNum}`));
alert(`Вгадав!!! Загадане число ${userNumber}, кількість спроб ${count}`);
//# sourceMappingURL=task_9.js.map