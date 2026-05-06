"use strict";
/*
Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.*/
let fieldGame = [
    ["X", " ", "0"],
    ["0", "X", " "],
    [" ", "0", " "],
];
console.log(fieldGame);
// ================================================================================================
// рекурсія
let allCombinations = [];
function getGameCombinations(field) {
    let checkEmptySell = field.flat(2).some((el) => el === " ");
    if (!checkEmptySell) {
        allCombinations.push(JSON.parse(JSON.stringify(field)));
        console.log(allCombinations);
        return;
    }
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === " ") {
                field[i][j] = "X";
                getGameCombinations(field);
                field[i][j] = " ";
                field[i][j] = "0";
                getGameCombinations(field);
                field[i][j] = " ";
                return;
            }
        }
    }
}
getGameCombinations(fieldGame);
document.write(`<table class="field-game">`);
function printFieldGame(arr) {
    document.write(`<p>Початковий стан</p>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<tr class="rows">`);
        for (let j = 0; j < arr[i].length; j++) {
            document.write(`<td class="cols">${arr[i][j]}</td>`);
        }
        document.write(`</tr>`);
    }
}
const tableRes = printFieldGame(fieldGame);
document.write(`</table>`);
document.write(`<table class="field-game">`);
function printFieldGameNew(arr) {
    arr.forEach((combo, index) => {
        document.write(`<p>Комбінація ${index + 1}</p>`);
        document.write(`<table class="field-game">`);
        for (let i = 0; i < combo.length; i++) { // рядки поля
            document.write(`<tr class="rows">`);
            for (let j = 0; j < combo[i].length; j++) { // клітинки рядка
                document.write(`<td class="cols">${combo[i][j]}</td>`); // окремий символ
            }
            document.write(`</tr>`);
        }
        document.write(`</table>`);
    });
}
const tableNew = printFieldGameNew(allCombinations);
document.write(`</table>`);
//# sourceMappingURL=task3.js.map