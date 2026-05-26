"use strict";
/*
Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.

*/
class TDate {
    #day = 0;
    #month = 0;
    #year = 0;
    constructor(day, month, year) {
        this.Day = day;
        this.Month = month;
        this.Year = year;
    }
    get Day() {
        return this.#day;
    }
    set Day(newDay) {
        this.#day = newDay;
    }
    get Month() {
        return this.#month;
    }
    set Month(newMonth) {
        this.#month = newMonth;
    }
    get Year() {
        return this.#year;
    }
    set Year(newYear) {
        this.#year = newYear;
    }
    daysInMonth() {
        const daysMonth = new Date(this.#year, this.#month, 0).getDate();
        return daysMonth;
    }
    increaseDay(day) {
        this.Day += day;
        while (this.Day > this.daysInMonth()) {
            this.Day -= this.daysInMonth();
            this.Month += 1;
            if (this.Month > 12) {
                this.Month = 1;
                this.Year += 1;
            }
        }
    }
    increaseMonth(month) {
        this.Month += month;
        while (this.Month > 12) {
            this.Month -= 12;
            this.Year += 1;
        }
        if (this.Day > this.daysInMonth()) {
            this.Day = this.daysInMonth();
        }
    }
    increaseYear(year) {
        this.Year += year;
        if (this.Day > this.daysInMonth()) {
            this.Day = this.daysInMonth();
        }
    }
    decreaseDay(day) {
        this.Day -= day;
        while (this.Day <= 0) {
            this.Month -= 1;
            if (this.Month < 1) {
                this.Month = 12;
                this.Year -= 1;
            }
            this.Day += this.daysInMonth();
        }
    }
    decreaseMonth(month) {
        this.Month -= month;
        while (this.Month < 1) {
            this.Month += 12;
            this.Year -= 1;
        }
        if (this.Day > this.daysInMonth()) {
            this.Day = this.daysInMonth();
        }
    }
    decreaseYear(year) {
        this.Year -= year;
        if (this.Day > this.daysInMonth()) {
            this.Day = this.daysInMonth();
        }
    }
    toString() {
        return `  ${this.#day}.${this.#month}.${this.#year}`;
    }
}
const date = new TDate(25, 2, 2004);
console.log(date.Day);
console.log(date.Month);
console.log(date.Year);
// console.log(date.daysInMonth());
// console.log(date.increaseDay(4));
// console.log(date.increaseMonth(12));
// console.log(date.increaseYear(0));
// console.log(date.decreaseDay(400));
// console.log(date.decreaseMonth(25));
console.log(date.decreaseYear(5));
document.write(`<p>${date.toString()}</p>`);
//# sourceMappingURL=task4.js.map