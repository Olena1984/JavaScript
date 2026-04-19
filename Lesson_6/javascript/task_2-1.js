"use strict";
// З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.
let result = "";
let userSymbol;
do {
    userSymbol = prompt("Enter your symbol:", "q").toLowerCase();
    if (userSymbol === "a") {
        break;
    }
    result = userSymbol + result; // зворотній напрям літер = поточний символ + вже існуючий результат
} while (true);
// document.write(`<p>Your symbol in reverse order is: ${result}</p>`);
alert(`Your symbol in reverse order is: ${result}`);
//# sourceMappingURL=task_2-1.js.map