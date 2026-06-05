"use strict";
// Користувач задає рік народження. Визначити кількість років користувача.
const currentYear = new Date().getFullYear();
console.log(currentYear);
function getYears() {
    const userInput = document.getElementById("userYear");
    const result = document.getElementById("result");
    const userYear = parseInt(userInput.value);
    if (userYear > currentYear || userYear < 0) {
        result.innerText = `Не вірне число`;
        return;
    }
    const yearsUser = currentYear - userYear;
    result.innerText = `Ваш вік: ${yearsUser.toString()}`;
}
const btn = document.getElementById("count");
btn.onclick = getYears;
//# sourceMappingURL=task3.js.map