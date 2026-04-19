"use strict";
//  Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. З клавіатури вводиться позиція пострілу. Гра продовжується поки  у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.
/*
1. створити константи розміщення зайця на полі
2. запит гравця на координати пострілу
3. запит гравцю на кількість патронів
4. перший постріл гравця, якщо він не влучив тоді змінюємо координати зайця
5. діапазон стрибка зайця на стрибка = -3, -2, -1, 0, 1, 2, 3 (0, 1, 2, 3, 4, 5, 6.)
*/
let rowPosRabbit = 1 + Math.floor(Math.random() * (10 - 1) + 1);
let colPosRabbit = 1 + Math.floor(Math.random() * (10 - 1) + 1);
let bullets = parseInt(prompt("Введіть кількість куль для гри", "5"));
let userAttemptRow;
let userAttemptCol;
let win = false;
do {
    userAttemptRow = parseInt(prompt("Введіть № рядка для пострілу від 1-10", "2"));
    userAttemptCol = parseInt(prompt("Введіть № стовпця для пострілу від 1-10", "2"));
    bullets--;
    if (userAttemptRow === rowPosRabbit && userAttemptCol === colPosRabbit) {
        win = true;
        alert(`Вітаю ви влучили у зайця рядок ${rowPosRabbit} стовпець ${colPosRabbit}. Кількість витрачених куль ${bullets}`);
        break;
    }
    else if (bullets === 0) {
        alert(`Спроби вичерпано. Заяць знаходився в рядку ${rowPosRabbit} і стовпці ${colPosRabbit}. Дякую за гру.`);
        break;
    }
    else {
        //  Math.floor(Math.random() * (max - min + 1)) + min;
        let moveRow = -3 + Math.floor(Math.random() * (3 - (-3) + 1));
        let moveCol = -3 + Math.floor(Math.random() * (3 - (-3) + 1));
        rowPosRabbit += moveRow;
        colPosRabbit += moveCol;
        if (rowPosRabbit < 1)
            rowPosRabbit = 1;
        if (rowPosRabbit > 10)
            rowPosRabbit = 10;
        if (colPosRabbit < 1)
            colPosRabbit = 1;
        if (colPosRabbit > 10)
            colPosRabbit = 10;
        alert("Мимо! Наступна спроба, але заяць перестрибнув");
    }
} while (!win && bullets > 0);
document.write(`<div class="game-container">`);
document.write(`<h1> Гра Тир</h1>`);
if (win) {
    document.write(`<p>Вітаю ви знайшли зайця. Заяць заховався в рядку ${rowPosRabbit} і стовпці ${colPosRabbit}</p>`);
}
else {
    document.write(`<p> Не вгадав. Заяць знаходився в рядку ${rowPosRabbit} і стовпці ${colPosRabbit}</p>`);
}
document.write(`<table class="field"> <tbody>`);
for (let i = 1; i <= 10; i++) {
    document.write(`<tr class="row">`);
    for (let j = 1; j <= 10; j++) {
        if (i === rowPosRabbit && j === colPosRabbit) {
            if (win) {
                document.write(`<td class="col hit"></td>`);
            }
            else {
                document.write(`<td class="col missed"></td>`);
            }
        }
        else {
            document.write(`<td class="col"></td>`);
        }
    }
    document.write(`</tr>`);
}
document.write(`</table> </tbody>`);
document.write(`</div>`);
//# sourceMappingURL=task_15.js.map