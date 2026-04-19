"use strict";
/* Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
•	починаються на букву «А» (для отримання першої літери можна також звернутися до номера авто як string ніби як до масиву за номером 0 - autoNum[0]-перша літера);
•	перша і остання літери співпадають;
•	складаються з більше ніш 5 символів;
 */
/*
1. Масив номерних знаків автомобіля
2. функція підрахунку номерів,що починаються на літеру А
3. функція підрахунку збігу першої та останньої літери
4. функція підрахунку номерних знаків > 5 символів
*/
// функція  яка генерує автомобільний номерний знак
function createAutoNum(count) {
    const letters = "ABCEHIKMOPTX";
    const digits = "0123456789";
    let allNumbers = [];
    for (let i = 0; i < count; i++) {
        // генеруємо перші дві літери
        let lettersStart = "";
        for (let j = 0; j < 2; j++) {
            lettersStart += letters[Math.floor(Math.random() * letters.length)];
        }
        // генеруємо 4 цифри номера
        let resNum = "";
        for (let n = 0; n < 4; n++) {
            resNum += digits[Math.floor(Math.random() * digits.length)];
        }
        // генеруємо перші дві літери
        let lettersEnd = "";
        for (let j = 0; j < 2; j++) {
            lettersEnd += letters[Math.floor(Math.random() * letters.length)];
        }
        let autoNum = `${lettersStart}${resNum}${lettersEnd}`;
        allNumbers.push(autoNum);
    }
    return allNumbers;
}
const quantityNum = parseInt(prompt("Введіть кількість номерних знаків для перевірки", "5"));
// функція підрахунку номерів,що починаються на літеру А
function countLetterA(numbers) {
    let count = 0;
    const compareLetter = 'A';
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i][0] === compareLetter.toUpperCase()) {
            count++;
        }
    }
    return count;
}
// функція підрахунку збігу першої та останньої літери
function countMatchLetters(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i][0] === numbers[i][numbers[i].length - 1]) {
            count++;
        }
    }
    return count;
}
// функція підрахунку номерних знаків в яких символів > 5 символів
function countSymbolsInCarNumber(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].length > 5) {
            count++;
        }
    }
    return count;
}
// Вивід результату
// вивід номерних знаків
const numAuto = createAutoNum(quantityNum);
//підрахунок номерних знаків, що починаються з літери А
const resCount = countLetterA(numAuto);
// перша літера = останній літері
const resMatch = countMatchLetters(numAuto);
// підрахунок номерів > 5 символів
const carNumberMore5 = countSymbolsInCarNumber(numAuto);
alert(`Перевірка таких номерниз знаків: ${numAuto}\nКількість знаків, шо починаються на літеру А = ${resCount}\nКількість номерів де перша літера = друга літера - ${resMatch}\nКількість номерних знаків де символів > 5= ${carNumberMore5}`);
//# sourceMappingURL=task_4.js.map