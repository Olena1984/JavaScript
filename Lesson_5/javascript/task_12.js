"use strict";
// Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).
let result = "";
document.write(`<div class="container">`);
for (let i = 1; i <= 3; i++) {
    const randomImg = 1 + Math.floor(Math.random() * 4);
    result += randomImg;
    document.write(`<img src="/Lesson_5/image/img${randomImg}.jpg">`);
}
document.write(`</div>`);
document.write(`<div><p>${result}</p></div>`);
let prize = 0;
switch (result) {
    case "111":
        prize = 100;
        break;
    case "222":
        prize = 200;
        break;
    case "333":
        prize = 500;
        break;
    case "444":
        prize = 1000;
        break;
}
document.write(`</div>`);
document.write(`<div> <p>Виграш становить ${prize} грн.</p></div>`);
// ======================
/*  */ 
//# sourceMappingURL=task_12.js.map