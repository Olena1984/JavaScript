"use strict";
/*Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
1)номери рядків від 0 до половини, стовпці від 0 до половини

2)номери рядків від 0 до половини, стовпці від половини до кінця

3)номери рядків (від половини до кінця, стовпці від 0 до половини

4) номери рядків від половини до кінця , стовпці від половини до кінця

5) Суму парних рядків
6) Суму непарних стовпців
7) У парних рядках – непарні стовпці, у непарних – парні.
 */
// створення одновимірного масиву
function getSimpleArray(column, max, min) {
    let arr = [];
    for (let i = 0; i < column; i++) {
        arr.push(Math.floor(min + Math.random() * (max - min) + 1));
    }
    return arr;
}
// створення багатовимірного масиву
function getMultidimensionalArray(rows, columns, max, min) {
    let table = [];
    for (let r = 0; r < rows; r++) {
        const randRow = getSimpleArray(columns, max, min);
        table.push(randRow);
    }
    return table;
}
const multidimensionalArray = getMultidimensionalArray(4, 6, 100, 1);
const joinArr = multidimensionalArray.map((row) => row.join(", ")).join("<br>");
document.write(`Згенерований масив:<br>${joinArr}<br><br>`);
console.log(multidimensionalArray);
const halfRow = Math.floor(multidimensionalArray.length / 2);
const halfCol = Math.floor(multidimensionalArray[0].length / 2);
// 1)номери рядків від 0 до половини, стовпці від 0 до половини
let sum1 = 0;
// for
for (let row = 0; row < halfRow; row++) {
    for (let cols = 0; cols < halfCol; cols++) {
        sum1 += multidimensionalArray[row][cols];
    }
}
document.write(`1.Сума елементів першої половини рядків та стовпців = ${sum1}<br>`);
console.log(sum1);
// reduce
let sumArea1 = multidimensionalArray.reduce((previousSum, rows, rowIndex) => {
    if (rowIndex < halfRow) {
        return (previousSum +
            rows.reduce((prevValue, cols, colIndex) => {
                if (colIndex < halfCol) {
                    return prevValue + cols;
                }
                else {
                    return prevValue;
                }
            }, 0));
    }
    else {
        return previousSum;
    }
}, 0);
console.log(sumArea1);
// ========================================================================================
// 2)номери рядків від 0 до половини, стовпці від половини до кінця
let sum2 = 0;
// for
for (let row = 0; row < halfRow; row++) {
    for (let col = halfCol; col < multidimensionalArray[row].length; col++) {
        sum2 += multidimensionalArray[row][col];
    }
}
document.write(`2.Сума елементів першої половини рядків та другої половини стовпців = ${sum2}<br>`);
console.log(sum2);
// reduce
let sumArea2 = multidimensionalArray.reduce((previousSum, rows, rowInd) => {
    if (rowInd < halfRow) {
        return (previousSum +
            rows.reduce((previousValue, cols, colInd) => {
                if (colInd >= halfCol) {
                    return previousValue + cols;
                }
                else {
                    return previousValue;
                }
            }, 0));
    }
    else {
        return previousSum;
    }
}, 0);
console.log(sumArea2);
// ================================================================================================
// 3)номери рядків (від половини до кінця, стовпці від 0 до половини
let sum3 = 0;
// for
for (let row = halfRow; row < multidimensionalArray.length; row++) {
    for (let col = 0; col < halfCol; col++) {
        sum3 += multidimensionalArray[row][col];
    }
}
document.write(`3.Сума елементів другої половини рядків та першої половини стовпців = ${sum3}<br>`);
console.log(sum3);
// reduce
let sumArea3 = multidimensionalArray.reduce((previousSum, rows, rowInd) => {
    if (rowInd >= halfRow) {
        return (previousSum +
            rows.reduce((colsSum, cols, colInd) => {
                if (colInd < halfCol) {
                    return colsSum + cols;
                }
                else {
                    return colsSum;
                }
            }, 0));
    }
    else {
        return previousSum;
    }
}, 0);
console.log(sumArea3);
// ================================================================================
// 4) номери рядків від половини до кінця , стовпці від половини до кінця
let sum4 = 0;
// for
for (let row = halfRow; row < multidimensionalArray.length; row++) {
    for (let col = halfCol; col < multidimensionalArray[row].length; col++) {
        sum4 += multidimensionalArray[row][col];
    }
}
document.write(`4.Сума елементів другої половини рядків та другої половини стовпців = ${sum4}<br>`);
console.log(sum4);
// reduce
let sumArea4 = multidimensionalArray.reduce((previousSum, rows, rowInd) => {
    if (rowInd >= halfRow) {
        return (previousSum +
            rows.reduce((colsSum, cols, colInd) => {
                if (colInd >= halfCol) {
                    return colsSum + cols;
                }
                else {
                    return colsSum;
                }
            }, 0));
    }
    else {
        return previousSum;
    }
}, 0);
console.log(sumArea4);
// ======================================================================
// Універсальний розв'язок задач від 1-4
// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;
// let sum4 = 0;
// for (let row = 0; row < multidimensionalArray.length; row++) {
//   for (let col = 0; col < multidimensionalArray[row].length; col++) {
//     if (row < halfRow && col < halfCol) {
//       sum1 += multidimensionalArray[row][col];
//     } else if (row < halfRow && col >= halfCol) {
//       sum2 += multidimensionalArray[row][col];
//     } else if (row >= halfRow && col < halfCol) {
//       sum3 += multidimensionalArray[row][col];
//     } else if (row >= halfRow && col >= halfCol) {
//       sum4 += multidimensionalArray[row][col];
//     }
//   }
// }
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// ===============================================================================
// Універсальна функція розв'язку задач 1-4
function getSumDeterminedArea(arr, rowStart, rowEnd, colStart, colEnd) {
    let sumArea = 0;
    for (let row = rowStart; row < rowEnd; row++) {
        for (let col = colStart; col < colEnd; col++) {
            sumArea += arr[row][col];
        }
    }
    return sumArea;
}
const result1 = getSumDeterminedArea(multidimensionalArray, 0, halfRow, 0, halfCol);
const result2 = getSumDeterminedArea(multidimensionalArray, 0, halfRow, halfCol, multidimensionalArray[0].length);
const result3 = getSumDeterminedArea(multidimensionalArray, halfRow, multidimensionalArray.length, 0, halfCol);
const result4 = getSumDeterminedArea(multidimensionalArray, halfRow, multidimensionalArray.length, halfCol, multidimensionalArray[0].length);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
// ===============================================================================
// 5) Суму парних рядків
let sumEvenRow = 0;
for (let row = 0; row < multidimensionalArray.length; row += 2) {
    for (let col = 0; col < multidimensionalArray[row].length; col++) {
        sumEvenRow += multidimensionalArray[row][col];
    }
}
document.write(`5.Сума елементів парних рядкув = ${sumEvenRow}<br>`);
console.log(sumEvenRow);
// reduce
let sumEvenRows = multidimensionalArray.reduce((prevSum, rows, rowInd) => {
    if (rowInd % 2 === 0) {
        return (prevSum +
            rows.reduce((colSum, cols) => colSum + cols, 0));
    }
    else {
        return prevSum;
    }
}, 0);
console.log(sumEvenRows);
// ==============================================================================
// 6) Суму непарних стовпців
let sumOddCols = 0;
for (let row = 0; row < multidimensionalArray.length; row++) {
    for (let col = 1; col < multidimensionalArray[row].length; col += 2) {
        sumOddCols += multidimensionalArray[row][col];
    }
}
document.write(`6.Сума елементів непарних стовпців = ${sumOddCols}<br>`);
console.log(sumOddCols);
// reduce
let oddSum = multidimensionalArray.reduce((persSum, rows) => {
    return (persSum +
        rows.reduce((colSum, cols, colInd) => {
            if (colInd % 2 !== 0) {
                return colSum + cols;
            }
            else {
                return colSum;
            }
        }, 0));
}, 0);
console.log(oddSum);
// =================================================================================
// 7) У парних рядках – непарні стовпці, у непарних – парні.
let sumEvenRoddC = 0;
let sumOddRevenC = 0;
for (let row = 0; row < multidimensionalArray.length; row++) {
    for (let col = 0; col < multidimensionalArray[row].length; col++) {
        if (row % 2 === 0 && col % 2 !== 0) {
            sumEvenRoddC += multidimensionalArray[row][col];
        }
        else if (row % 2 !== 0 && col % 2 === 0) {
            sumOddRevenC += multidimensionalArray[row][col];
        }
    }
}
document.write(`7.Сума непарних стовпців у парних рядках = ${sumEvenRoddC}, а парних елементів у непарних стовпцях = ${sumOddRevenC}`);
console.log(sumEvenRoddC);
console.log(sumOddRevenC);
// reduce
let mixSum = multidimensionalArray.reduce((prevSum, rows, rowInd) => {
    if (rowInd % 2 === 0) {
        prevSum[0] += rows.reduce((colSum, cols, colInd) => {
            return colInd % 2 !== 0 ? colSum + cols : colSum;
        }, 0);
    }
    else {
        prevSum[1] += rows.reduce((colSum, cols, colInd) => {
            return colInd % 2 === 0 ? colSum + cols : colSum;
        }, 0);
    }
    return prevSum;
}, [0, 0]);
console.log(mixSum);
//# sourceMappingURL=task1.js.map