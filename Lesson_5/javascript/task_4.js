"use strict";
// Вивести таблицю з 3 рядків і 7 стовпців
document.write("<table>");
//створюємо  рядки
for (let row = 1; row <= 3; row++) {
    document.write(`<tr>`);
    for (let num = 1; num <= 7; num++) {
        document.write(`<td> ${num} </td>`);
    }
    document.write(`<tr>`);
}
document.write("</table>");
//# sourceMappingURL=task_4.js.map