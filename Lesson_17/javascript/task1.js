"use strict";
// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
class OperationsOnArrays {
    arrNumbers;
    static positiveNumbers = 0;
    static negativeNumbers = 0;
    static countNumbers = 0;
    static searchNumber;
    //   static searchNumber:number|null = null
    constructor(arrNumbers) {
        this.arrNumbers = arrNumbers;
    }
    static getPositiveNumbers(arr) {
        for (const element of arr) {
            if (element > 0) {
                OperationsOnArrays.positiveNumbers += 1;
            }
        }
        return OperationsOnArrays.positiveNumbers;
    }
    static getNegativeNumbers(arr) {
        for (const element of arr) {
            if (element < 0) {
                OperationsOnArrays.negativeNumbers += 1;
            }
        }
        return OperationsOnArrays.negativeNumbers;
    }
    static countSomeNumber(arr, searchNumber) {
        OperationsOnArrays.searchNumber = searchNumber;
        for (const element of arr) {
            if (element === OperationsOnArrays.searchNumber) {
                OperationsOnArrays.countNumbers += 1;
            }
        }
        return OperationsOnArrays.countNumbers;
    }
    toString() {
        return `кількість додатних чисел = ${OperationsOnArrays.positiveNumbers}<br>кількість від’ємних чисел = ${OperationsOnArrays.negativeNumbers}<br>кількість входжень числа ${OperationsOnArrays.searchNumber}  = ${OperationsOnArrays.countNumbers}`;
    }
}
const arr = [23, -676, -1, 98, 456, 3, -56, 98, 1, 5, 5, 23];
const operations = new OperationsOnArrays(arr);
console.log(OperationsOnArrays.getPositiveNumbers(arr));
console.log(OperationsOnArrays.getNegativeNumbers(arr));
console.log(OperationsOnArrays.countSomeNumber(arr, 5));
document.write(`${operations.toString()}`);
//# sourceMappingURL=task1.js.map