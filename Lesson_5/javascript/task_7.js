"use strict";
// Вивести на екран N абзаців (N вводиться користувачем) за зразком:
const userNumP = parseInt(prompt("Кількість абзаців", "3"));
for (let i = 1; i <= userNumP; i++) {
    document.write(`<h1> Заголовок ${i}</h1>`);
    for (let j = 1; j <= i; j++) {
        document.write(`<p>Розділ ${i}, параграф ${j}</p>`);
    }
    document.write(`<hr>`);
}
//# sourceMappingURL=task_7.js.map