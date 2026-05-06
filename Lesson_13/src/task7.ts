/* Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка. */

//
const minNumber: number = 1;
const maxNumber: number = 100;

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

function questionUser(min: number, max: number): void {
  let numOne: number = Math.floor(min + Math.random() * (max - min + 1));
  let numTwo: number = Math.floor(min + Math.random() * (max - min + 1));
  let sum = numOne + numTwo;
  let questionToUser = prompt(`Скільки буде ${numOne} + ${numTwo}?`, "");
  if (questionToUser === null) {
    alert(`Ви скасували задачу. Вихід`);
    return;
  }
  const correctAnswer: number = parseInt(questionToUser);
  if (correctAnswer === sum) {
    alert("Вітаю, відповідь вірна. Спробуй наступний приклад");
 
  } else {
    alert("Шкода, але ти помилився. Спробуй наступний приклад");
  }
  setTimeout(() => {
        questionUser(minNumber, maxNumber)
    },10000);
}
questionUser(minNumber, maxNumber);