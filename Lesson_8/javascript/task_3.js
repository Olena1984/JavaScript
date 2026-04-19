"use strict";
// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
/*
1. створити список імен учнів; задати кількість учнів
2. повіняти отриманий список з ім'ям "Іван"
3. вивести результат
 */
function countName(num) {
    const comparableName = "Іван";
    let pupilsList = [];
    for (let i = 1; i <= num; i++) {
        let inputPupilName = prompt(`Введіть ім'я ${i} учня`, 'Іван');
        pupilsList.push(inputPupilName);
    }
    document.write(`<div>Список імен учнів: ${pupilsList} <br></div>`);
    let count = 0;
    for (let i = 0; i < pupilsList.length; i++) {
        if (pupilsList[i].toUpperCase() === comparableName.toUpperCase()) {
            count++;
        }
    }
    return count;
}
const numbersPupils = parseInt(prompt("Введіть кількість учнів", "10"));
const countIvan = countName(numbersPupils);
document.write(`<div>Кількість імен Іван зустрічається =  ${countIvan} рази</div>`);
//# sourceMappingURL=task_3.js.map