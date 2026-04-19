"use strict";
// Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
let attempt;
const userNum = 7;
for (attempt = 0; attempt < 3; attempt++) {
    let compNum = 1 + Math.floor(Math.random() * 10);
    if (confirm(`Загадане число = ${compNum}?`)) {
        document.write(`Вгадав`);
        break;
    }
}
if (attempt === 3) {
    document.write(`Не вгадав, спроби вичерпано.`);
}
document.write(`Загадане число ${userNum}`);
//# sourceMappingURL=task_8.js.map