"use strict";
// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
function countAverageTemper(userCount) {
    let countPositiveNum = 0;
    let sumPositiveNum = 0;
    let average = 0;
    let userEnterTemper = 0;
    let allTemper = "";
    for (let i = 1; i <= userCount; i++) {
        userEnterTemper = parseInt(prompt(`Enter ${i} temperature`, "5"));
        if (userEnterTemper >= 0) {
            countPositiveNum++;
            sumPositiveNum += userEnterTemper;
        }
        average = sumPositiveNum / countPositiveNum;
        allTemper += `${userEnterTemper}`;
        if (i < userCount)
            allTemper += ", "; //прибираємо кому після останнього символу
    }
    return `Середнє значення для додатних показів температури = ${average.toFixed(2)}.\nВведено наступні показники температури: ${allTemper}.\nДодатні показники температури: ${countPositiveNum}`;
}
const userCount = parseInt(prompt("Enter number", "5"));
const resDisplay = countAverageTemper(userCount);
alert(`${resDisplay}`);
//# sourceMappingURL=task_10.js.map