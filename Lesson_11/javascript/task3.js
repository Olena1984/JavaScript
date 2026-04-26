"use strict";
/* Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
 */
const rows = 6;
const cols = 6;
// let gameField = Array.from({ length: rows }, () =>
//   Array.from({ length: cols }, () =>0),);
let gameField = Array.from({ length: rows }, () => Array.from({ length: cols }).fill(0));
let shipNum = 5;
let shipPlace = 0;
while (shipPlace < shipNum) {
    let randRow = Math.floor(Math.random() * gameField.length);
    let randCol = Math.floor(Math.random() * gameField[0].length);
    if (gameField[randRow][randCol] === 0) {
        gameField[randRow][randCol] = 1;
        shipPlace++;
    }
}
function seaBattle(gameField, ships) {
    let bullets = parseInt(prompt("Введіть кількість снарядів", "5"));
    let hitShip = 0;
    while (bullets > 0 && ships > 0) {
        const userShotRow = prompt("Введіть номер рядка від 1 до 6", "1");
        const userShotCol = prompt("Введіть номер стовпця від 1 до 6", "1");
        if (userShotRow === null || userShotCol === null)
            return "Гра скасована";
        const correctShotRow = parseInt(userShotRow) - 1;
        const correctShotCol = parseInt(userShotCol) - 1;
        if (correctShotRow >= 0 &&
            correctShotRow < gameField.length &&
            correctShotCol >= 0 &&
            correctShotCol < gameField[0].length) {
            if (gameField[correctShotRow][correctShotCol] === 1) {
                ships--;
                bullets--;
                hitShip++;
                gameField[correctShotRow][correctShotCol] = 2;
                alert(`Влучив! Мінус 1 корабель залишилося ще ${ships} кораблів`);
            }
            else {
                bullets--;
                alert(`Постріл мимо (або повторний постріл) - ваші снаряди зменшилися на 1`);
            }
        }
    }
    if (ships === 0) {
        return `Вітаю ви потопили усі кораблі`;
    }
    else {
        return `Снаряди закінчились, ви програли. Цілими залишилося - ${ships} кораблів. Кількість влучань - ${hitShip}`;
    }
}
const game = seaBattle(gameField, shipNum);
alert(game);
const tableGameField = gameField.map((row) => row.join(',')).join('<br>');
document.write(`<p>Розміщення кораблів на полі:<br>${tableGameField}</p>`);
console.log(gameField);
//# sourceMappingURL=task3.js.map