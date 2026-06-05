"use strict";
// Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)
const min = 1;
const max = 100;
function randNumber() {
    return Math.floor(min + Math.random() * (max - min + 1));
}
const parentEl = document.getElementById('table');
function generateTable(rows, cols) {
    const table = document.createElement('table');
    for (let r = 0; r < rows; r++) {
        const trEl = document.createElement('tr');
        for (let c = 0; c < cols; c++) {
            const tdEl = document.createElement('td');
            tdEl.innerText = (randNumber()).toString();
            trEl.append(tdEl);
        }
        table.append(trEl);
    }
    return table;
}
const createTable = generateTable(3, 4);
parentEl.append(createTable);
//# sourceMappingURL=task5.js.map