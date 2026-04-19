"use strict";
// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.
const rowPosition = parseInt(prompt("Row = ", "1"));
const colPosition = parseInt(prompt("Col = ", "1"));
const bullet = parseInt(prompt("bullet = ", "1"));
const shipRow = Math.floor(Math.random() * rowPosition + 1);
const shipCol = Math.floor(Math.random() * colPosition + 1);
for (let attempt = 0; attempt <= bullet; attempt++) {
    const userRow = parseInt(prompt("witch row?", "1"));
    const userCol = parseInt(prompt("witch col?", "1"));
    if (userRow === rowPosition && userCol === colPosition) {
        alert(`Win`);
        break;
    }
    else {
        alert(`Failed :(`);
    }
}
document.write(`Ship position: row = ${rowPosition}, col= ${colPosition} `);
//# sourceMappingURL=task_13.js.map