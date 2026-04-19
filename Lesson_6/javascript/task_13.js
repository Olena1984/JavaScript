"use strict";
// З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.
/*
1. створити  змінні на два мінімальні числа
2. присвоїти їм значення для перевірки
3. створити змінну на запит числа
4. цикл while
5. виключити можливість натискання скасувати
6. ввести змінну для перетворення введеного числа в число
7. порівняння введених чисел і присвоєння їм значень
8.    перевірити чи введено 2 числа
9. ввести змінну для обчислення різниці чисел
10. порівняння різниці  із умовою

*/
let min1 = Infinity;
let min2 = Infinity;
while (true) {
    let numberRequest = prompt("Введіть число", "1");
    if (numberRequest === null) {
        alert("Ви натиснули скасувати. Вихід");
        break;
    }
    let convertedValue = parseInt(numberRequest);
    if (convertedValue < min1) {
        min2 = min1;
        min1 = convertedValue;
    }
    else if (convertedValue < min2) {
        min2 = convertedValue;
    }
    else if (min2 !== Infinity) {
        alert(`Дане число не є меншим за ${min1} та ${min2}. Введіть менше число за ${min2}`);
    }
    if (min2 !== Infinity) {
        let diff = Math.abs(min1 - min2);
        if (diff > 5) {
            alert(`Різниця чисел ${min1} та ${min2} > 5`);
            break;
        }
        else {
            alert(`Різниця чисел ${min1} та ${min2} < 5`);
            continue;
        }
    }
}
//# sourceMappingURL=task_13.js.map