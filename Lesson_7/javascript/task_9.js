"use strict";
// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
/*
1. отримати кількість показників температури
2. отримати самі значення температури
3. порівняти п2 чи показники від'ємні
4. якщо показники від'ємні підрахувати та вивести їх
5. якщо показник додатній то його пропустити
6. виконувати перевірку поки кількість показників не перевищує задану
*/
function countNegativeTemperature(numbersOfShows) {
    let count = 0;
    let userTemperature = 0;
    let allTemperature = "";
    for (let i = 1; i <= numbersOfShows; i++) {
        userTemperature = parseInt(prompt(`Enter your ${i} temperature`, "10"));
        if (userTemperature < 0)
            count++;
        allTemperature += `${userTemperature}`;
        if (i < numbersOfShows)
            allTemperature += ", "; //прибираємо кому після останнього символу 
    }
    return `Кількість від’ємних показів температури ${count}\nВведено такі показники температура: ${allTemperature}\n`;
}
const numbersOfShows = parseInt(prompt("Enter number", "7"));
const displayRes = countNegativeTemperature(numbersOfShows);
alert(` ${displayRes}`);
//# sourceMappingURL=task_9.js.map