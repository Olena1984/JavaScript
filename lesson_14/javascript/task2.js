"use strict";
const dateObj = {
    day: 5,
    month: 8,
    year: 2026,
};
function getMonth(obj, monthNum) {
    // скільки всього місяців пройде від початку поточного року
    const totalMonth = (obj.month - 1) + monthNum;
    // скільки повних років в цій кількості місяців
    const futureYear = obj.year + Math.floor(totalMonth / 12);
    return futureYear;
}
const month = 24;
const res = getMonth(dateObj, month);
document.write(`Day: ${dateObj.day}, Month ${dateObj.month}, Year ${dateObj.year}`);
document.write(`<p> Через ${month} місяців буде ${res} рік </p>`);
console.log(res);
//# sourceMappingURL=task2.js.map