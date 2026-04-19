"use strict";
// Комп’ютер загадує випадкове число від 1 до 10. Вгадати число шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача.
/*
1. змінна із рандомним числом
2. зміння для зберігання результату. змінна для кількості спроб
3. введення першого вгадуваного значення і перевірка
4. Якщо число не вірне збільшуємо на 1 і продовжуємо
5. якщо вгадали вивести кількість спроб
 */
let result = false;
let counter = 0;
let userInput;
let randomNumber = 1 + Math.floor(Math.random() * 10);
do {
    counter++;
    let userTry = prompt("Enter number 1-10", "2");
    if (userTry === null) {
        alert("Did you give up?");
        break;
    }
    userInput = parseInt(userTry);
    if (userInput > 10 || userInput < 1) {
        alert("Uncorrect  number, enter number 1-10");
        continue;
    }
    if (userInput === randomNumber) {
        result = true;
        alert(`Win, number is ${userInput}, your attempt = ${counter}`);
        break;
    }
    else {
        alert(`Try again`);
    }
} while (!result);
//# sourceMappingURL=task_11.js.map