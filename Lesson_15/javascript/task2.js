"use strict";
/*
Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
Тир
-----------------------------------------
Поля(властивості)
Масив, у якому зберігається поле з зайцями
 ----------------------------------------
Методи (дії)
Метод пострілу (задається позиція пострілу)
Виведення ігрового поля
*/
const row = 4;
const col = 4;
const rabbit = 4;
const initialField = Array.from({ length: row }, () => Array.from({ length: col }).fill(0));
class TyrObject {
    row;
    col;
    field;
    rabbits;
    constructor(row, col, field, rabbits) {
        this.row = row;
        this.col = col;
        this.field = field;
        this.rabbits = rabbits;
    }
    requiredField() {
        let count = 0;
        while (count < this.rabbits) {
            const randRow = Math.floor(Math.random() * this.row);
            const randCol = Math.floor(Math.random() * this.col);
            if (this.field[randRow][randCol] === 0) {
                this.field[randRow][randCol] = 1;
                count++;
            }
        }
        return this.field;
    }
    shot() {
        const rowNum = prompt("Введіть №рядка (1-4)", "2");
        const colNum = prompt("Введіть №стовпця (1-4)", "2");
        if (rowNum === null || colNum === null) {
            alert(`Ви завершили гру`);
            return false;
        }
        const shotRow = parseInt(rowNum) - 1;
        const shotCol = parseInt(colNum) - 1;
        if (shotCol < 0 ||
            shotRow < 0 ||
            shotCol >= this.col ||
            shotRow >= this.row) {
            throw new Error("Не коректні дані");
        }
        if (this.field[shotRow][shotCol] === 1) {
            alert(`Вітаю, ви влучили у зайця`);
            this.field[shotRow][shotCol] = 5;
            this.rabbits--;
        }
        else if (this.field[shotRow][shotCol] === 5) {
            alert(`Ти вже стріляв сюди`);
        }
        else {
            alert(`Мимо, стріляй ще раз`);
        }
        return this.rabbits > 0;
    }
    drawTable() {
        const title = document.createElement("h2");
        title.innerText = "Гра 'Тир'";
        title.style.marginLeft = "200px";
        title.style.marginBottom = "20px";
        const table = document.createElement("table");
        for (let i = 0; i < this.row; i++) {
            const trEl = document.createElement("tr");
            for (let j = 0; j < this.col; j++) {
                const tdEl = document.createElement("td");
                tdEl.innerHTML = this.field[i][j].toString();
                tdEl.style.border = "1px solid black";
                tdEl.style.width = "40px";
                tdEl.style.height = "40px";
                tdEl.style.textAlign = "center";
                trEl.append(tdEl);
            }
            table.append(trEl);
        }
        document.body.innerHTML = "";
        document.body.append(title);
        document.body.append(table);
    }
}
const generator = new TyrObject(row, col, initialField, rabbit);
const printField = generator.requiredField();
console.log(printField);
// -----тривалість гри------------
let game = true;
generator.drawTable();
while (game) {
    game = generator.shot();
    generator.drawTable();
    if (generator.rabbits === 0) {
        alert(`Перемога!`);
    }
}
//# sourceMappingURL=task2.js.map