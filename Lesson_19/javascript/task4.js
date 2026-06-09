"use strict";
//  Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).
/*
<tr>
    <td>34</td>
    <td>4</td>
    <td>5</td>
</tr>
*/
const parentEl = document.getElementById("table");
const num1 = 1;
const num2 = 100;
function createTable() {
    const table = document.createElement("table");
    table.className = "table";
    for (let i = 0; i < 3; i++) {
        const trEl = document.createElement("tr");
        for (let i = 0; i < 3; i++) {
            const tdEl = document.createElement("td");
            tdEl.innerText = String(Math.floor(num1 + Math.random() * (num2 - num1 + 1)));
            trEl.append(tdEl);
        }
        table.append(trEl);
    }
    table.dataset.clicks = "0";
    const br = document.createElement("br");
    const pEl = document.createElement("p");
    pEl.innerText = "Кількість кліків = ";
    const spanEl = document.createElement("span");
    spanEl.id = "clickCount";
    pEl.append(spanEl);
    parentEl.append(table);
    parentEl.append(br);
    parentEl.append(pEl);
    parentEl.append(br);
}
for (let i = 0; i < 3; i++) {
    createTable();
}
let countClick = [0, 0, 0];
parentEl.onclick = function (event) {
    const cell = event.target;
    let parentTable = cell.closest("table");
    const pElement = parentTable.nextElementSibling;
    const span = pElement.firstElementChild;
    if (cell.tagName === "TD") {
        parentTable.style.border = "3px solid red";
        // додавання dataset  
        // let clickOnElement = Number(parentTable.dataset.clicks);
        // clickOnElement += 1;
        // parentTable.dataset.clicks = String(clickOnElement);
        // span.innerText = String(parentTable.dataset.clicks);
        // без dataset
        const tables = document.querySelectorAll(".table");
        let tableInd = Array.from(tables).indexOf(parentTable);
        countClick[tableInd] += 1;
        span.innerText = String(countClick[tableInd]);
        console.log(tableInd);
    }
};
//# sourceMappingURL=task4.js.map