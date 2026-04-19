// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
let number = 1;
document.write("<table>");
//створила рядки
for (let row = 1; row <= 3; row++) {
  document.write(`<tr>`);
  // створила колонки
  for (let col = 1; col <= 3; col++) {
    document.write(`<td> ${number++}</td>`);
  }
  document.write(`</tr>`);
}
document.write("</table><br>");

// 2-га таблиця
let number2 = 10;
document.write("<table>");
//створила рядки
for (let row = 1; row <= 3; row++) {
  document.write(`<tr>`);
  // створила колонки
  for (let col = 1; col <= 3; col++) {
    document.write(`<td> ${number2++}</td>`);
  }
  document.write(`</tr>`);
}
document.write("</table><br>");

// 3-тя таблиця
let number3 = 19;
document.write("<table>");
//створила рядки
for (let row = 1; row <= 3; row++) {
  document.write(`<tr>`);
  // створила колонки
  for (let col = 1; col <= 3; col++) {
    document.write(`<td> ${number3++}</td>`);
  }
  document.write(`</tr>`);
}
document.write("</table>");


// ДРУГИЙ ВАРІАНТ РОЗВ'ЯЗКУ

// let num = 1;
// for (let tableNum = 1; tableNum <= 3; tableNum++) {
//   document.write("<br>");
//   document.write("<table>");
//   for (let row = 1; row <= 3; row++) {
//     document.write(`<tr>`);
//     // створила колонки
//     for (let col = 1; col <= 3; col++) {
//       document.write(`<td>${num++}</td>`);
//     }
//     document.write(`<tr>`);
//   }
//   document.write("</table>");
// }






