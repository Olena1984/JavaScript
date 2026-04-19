"use strict";
/* Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
    1. номери днів, протягом яких кількість відвідувачів була меншою за 20;
    2. номери днів, коли кількість відвідувачів була мінімальною;
    3. номери днів, коли кількість відвідувачів була максимальною;
    4. загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.
 */
/*
1. створити масив кількості відвідувачів магазину протягом тижня
2. знайти номери днів, протягом яких кількість відвідувачів була меншою за 20
3. знайти номери днів, коли кількість відвідувачів була мінімальною
4. знайти номери днів, коли кількість відвідувачів була максимальною
5. обчислити загальну кількість клієнтів у робочі дні
6. обчислити загальну кількість клієнтів на вихідних
 */
// генерую масив відвідувачів протягом тижня
function getVisitorNumber(quantityOfDays) {
    let visitor = [];
    let day;
    for (day = 0; day < quantityOfDays; day++) {
        const randomVisitor = 1 + Math.floor(Math.random() * (50 - 1 + 1));
        visitor.push(randomVisitor);
    }
    return visitor;
}
// знаходження кількості відвідувачів  менше 20
function countingVisitors(quantityVisitors) {
    let less20 = [];
    for (let i = 0; i < 7; i++) {
        if (quantityVisitors[i] <= 20) {
            less20.push(i + 1);
        }
    }
    if (less20.length === 0) {
        return "Протягом тижня відвідуваність завжди була вищою за 20 осіб.";
    }
    return `Відвідувачів менше 20 було у ці дні: ${less20}`;
}
// знаходження min та max кількості відвідувачів та їх днів
function minMaxQuantityVisitors(quantity) {
    let minValue = quantity[0];
    let maxValue = quantity[0];
    for (let i = 1; i < quantity.length; i++) {
        if (quantity[i] < minValue) {
            minValue = quantity[i];
        }
        if (quantity[i] > maxValue) {
            maxValue = quantity[i];
        }
    }
    let minDaysVisitors = [];
    let maxDaysVisitors = [];
    for (let j = 0; j < quantity.length; j++) {
        if (quantity[j] === minValue) {
            minDaysVisitors.push(j + 1);
        }
        if (quantity[j] === maxValue) {
            maxDaysVisitors.push(j + 1);
        }
    }
    return `Мінімальна кількість відвідувачів = ${minValue}, була у ці дні: ${minDaysVisitors} а максимальна = ${maxValue} у ці дні: ${maxDaysVisitors}`;
}
// кількість відвідувачів у робочі і вихідні дні
function totalVisitor(quantity) {
    let totalVisitorInWorkDay = 0;
    let totalVisitorInRestDay = 0;
    for (let i = 0; i < quantity.length; i++) {
        if (i < 5) {
            totalVisitorInWorkDay += quantity[i];
        }
        else {
            totalVisitorInRestDay += quantity[i];
        }
    }
    return `Загальна кількість відвідувачів у робочі дні = ${totalVisitorInWorkDay}, а у вихідні дні = ${totalVisitorInRestDay} `;
}
const DAYS_IN_WEEK = 7;
const visitorOfDay = getVisitorNumber(DAYS_IN_WEEK);
const countResult = countingVisitors(visitorOfDay);
let minMaxResult = minMaxQuantityVisitors(visitorOfDay);
let totalRes = totalVisitor(visitorOfDay);
alert(`Кількість відвідувачів протягом тижденя = ${visitorOfDay}.\n${minMaxResult}.\n${totalRes}`);
//# sourceMappingURL=task_2.js.map