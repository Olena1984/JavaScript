"use strict";
//  Вивести таблицю
let num = 1;
document.write("<table>");
//створила рядки
for (let row = 1; row <= 3; row++) {
    document.write(`<tr>`);
    // створила колонки
    for (let col = 1; col <= 3; col++) {
        // for (let num = 1; num <= 7; num++) {
        //
        document.write(`<td> ${num++}</td>`);
        // }
    }
    document.write(`<tr>`);
}
document.write("</table>");
//# sourceMappingURL=task_5.js.map