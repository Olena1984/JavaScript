"use strict";
/* Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
за весь рік;
    у першій половині року;
    у другій половині року;
    за літо;
    за ІІ квартал;
    за парні місяці (з парними номерами);
    за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
*/
const payments = [
    2450, 2300, 2100, 1800, 1200, 1150, 4320, 900, 5000, 3500, 6000, 2300,
];
// Знаходження суми за рік
function getTotalSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// знаходження суми у першій половині року
function getSumInFirstHalfYear(numbers) {
    let sum = 0;
    for (let i = 0; i <= 5; i++) {
        sum += numbers[i];
    }
    return sum;
}
// знаходження суми у другій половині року
function getSumInSecondHalfYear(numbers) {
    let sum = 0;
    for (let i = 6; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// знаходження суми за літо
function getSummerSum(numbers) {
    let sum = 0;
    for (let i = 5; i <= 7; i++) {
        sum += numbers[i];
    }
    return sum;
}
// знаходження суми за ІІ квартал
function getSumForSecondQuarter(numbers) {
    let sum = 0;
    for (let i = 3; i <= 5; i++) {
        sum += numbers[i];
    }
    return sum;
}
// знаходження суми за парні місяці (з парними номерами);
function getSumEvenMonth(numbers) {
    let sum = 0;
    for (let i = 1; i < numbers.length; i += 2) {
        sum += numbers[i];
    }
    return sum;
}
//знаходження суми за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
function getSumFirstMonthsYear(numbers) {
    let sum = 0;
    for (let i = 2; i < numbers.length; i += 3) {
        sum += numbers[i];
    }
    return sum;
}
// вивід усіх результатів
const totalSum = getTotalSum(payments);
const sumFirstHalfYear = getSumInFirstHalfYear(payments);
const sumSecondHalfYear = getSumInSecondHalfYear(payments);
const sumForSummer = getSummerSum(payments);
const sumForSecondQuarter = getSumForSecondQuarter(payments);
const evenMonthSum = getSumEvenMonth(payments);
const sumFirstMonthYear = getSumFirstMonthsYear(payments);
document.write(`<div> Платіжки за рік ${payments}<br>Сумарну кількість грошей за весь рік = ${totalSum} грн.<br>Кількість грошей у першій половині року = ${sumFirstHalfYear} грн.<br>Кількість грошей у  другій половині року ${sumSecondHalfYear}грн.<br>Кількість грошей за літо = ${sumForSummer} грн.<br>Кількість грошей за за ІІ квартал = ${sumForSecondQuarter} грн.<br>Кількість грошей за парні місяці = ${evenMonthSum} грн.<br>Кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима) = ${sumFirstMonthYear} грн.`);
//# sourceMappingURL=task_7.js.map