"use strict";
/* 0. Вивести на екран
A B C D E
B C D E F
C D E F G
D E F G H
E F G H I
 */
/* 1 2 3 4 5
   2 3 4 5 6
   3 4 5 6 7
   4 5 6 7 8
   5 6 7 8 9
   */
// for (let row = 1; row <=5; row++) {
//    for (let num = row; num < row+5; num++){
//     document.write(`${num }`);
//    }
//   document.write('<br>');
// }
const start = 65; // код символу 'A' в ASCII
for (let row = 1; row <= 5; row++) {
    for (let charCodeA = start + row - 1; charCodeA < start + row + 4; charCodeA++) {
        document.write(` ${String.fromCharCode(charCodeA)}`);
    }
    document.write('<br>');
}
//# sourceMappingURL=tasl_1.js.map