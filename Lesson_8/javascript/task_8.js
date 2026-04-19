"use strict";
/* Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш. */
/*
1. створюю масив з певною кількістю елементів
2. генерую рандомні значення і присвоюю їх елементам масиву
3. прошу користувача зробити свій вибір елементу
4. перевірка і присвоєння суми
5. запитую у користувача чи продовжуємо
6. якщо так запит на введення 2=го елемента і перевірка
7. якщо ні то виходжу з циклу
8. вивід результату
*/
function getRandomNumbers(num, min, max) {
    let arrayNumbers = [];
    for (let i = 0; i < num; i++) {
        let randNum = min + Math.floor(Math.random() * (max - min + 1));
        arrayNumbers.push(randNum);
    }
    return arrayNumbers;
}
const minNumber = -500;
const maxNumber = 500;
const numArr = 10;
// const numArr = parseInt(prompt('Введіть число','10')!)
function checkUserChoice(numbers) {
    let sum = 0;
    let totalSum = 0;
    let userChoice;
    while (true) {
        userChoice = prompt(`Введіть число від 1 до${numArr}`, "5");
        if (userChoice === null)
            break;
        const userNum = parseInt(userChoice);
        if (userNum >= 1 && userNum <= numbers.length) {
            const index = userNum - 1;
            sum = numbers[index];
            totalSum += sum;
            alert(`Ви ввели ${userNum} - ваш виграш = ${sum} `);
        }
        else {
            alert(`Не вірне число ${userNum}. Повторіть спробу`);
            continue;
        }
        let userConfirm = confirm(`Продовжуємо гру?`);
        if (userConfirm) {
            continue;
        }
        else {
            break;
        }
    }
    return totalSum;
}
const getArray = getRandomNumbers(numArr, minNumber, maxNumber);
const result = checkUserChoice(getArray);
alert(`Ваш виграш =  ${result}`);
//# sourceMappingURL=task_8.js.map