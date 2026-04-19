"use strict";
// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
function getSeason(month) {
    switch (month) {
        case "12":
        case "1":
        case "2":
            return "Зима";
        case "3":
        case "4":
        case "5":
            return "Весна";
        case "6":
        case "7":
        case "8":
            return "Літо";
        case "9":
        case "10":
        case "11":
            return "Осінь";
        default:
            // return "Не коректний номер місяця";
            throw new Error("Не коректний номер місяця");
    }
}
const monthNumber = prompt("Введіть номер місяця", "1");
alert(` ${getSeason(monthNumber)}`);
//# sourceMappingURL=task_0.js.map