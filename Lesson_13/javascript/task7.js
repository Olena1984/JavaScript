"use strict";
/* Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка. */
//
const minNumber = 1;
const maxNumber = 100;
// коли інтервал між питаннями буде менший ніж 10 секунд. 
// function questionUser(min: number, max: number): void {
//   let numOne: number = Math.floor(min + Math.random() * (max - min + 1));
//   let numTwo: number = Math.floor(min + Math.random() * (max - min + 1));
//   let sum = numOne + numTwo;
//   let questionToUser = prompt(`Скільки буде ${numOne} + ${numTwo}?`, "");
//   if (questionToUser === null) {
//     alert(`Ви скасували задачу. Вихід`);
//     return;
//   }
//   const correctAnswer: number = parseInt(questionToUser);
//   if (correctAnswer === sum) {
//     alert("Вітаю, відповідь вірна. Спробуй наступний приклад");
//   } else {
//     alert("Шкода, але ти помилився. Спробуй наступний приклад");
//   }
// }
// questionUser(minNumber, maxNumber);
// let timer = setInterval(() => {
//   questionUser(minNumber, maxNumber);
// }, 10000);
// варіант коли інтервал між перевіркою і наступним прикладом 10сек.
function questionUser(min, max) {
    let numOne = Math.floor(min + Math.random() * (max - min + 1));
    let numTwo = Math.floor(min + Math.random() * (max - min + 1));
    let sum = numOne + numTwo;
    let questionToUser = prompt(`Скільки буде ${numOne} + ${numTwo}?`, "");
    if (questionToUser === null) {
        alert(`Ви скасували задачу. Вихід`);
        return;
    }
    const correctAnswer = parseInt(questionToUser);
    if (correctAnswer === sum) {
        alert("Вітаю, відповідь вірна. Спробуй наступний приклад");
    }
    else {
        alert("Шкода, але ти помилився. Спробуй наступний приклад");
    }
    setTimeout(() => {
        questionUser(minNumber, maxNumber);
    }, 10000);
}
questionUser(minNumber, maxNumber);
//# sourceMappingURL=task7.js.map