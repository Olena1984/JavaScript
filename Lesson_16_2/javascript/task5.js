"use strict";
// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.
class TMoney {
    #sum$ = 0;
    #dollarRate = 45;
    #newRate$ = 0;
    constructor(sum$ = 0, dollarRate = 45) {
        this.Sum$ = sum$;
        this.DollarRate = dollarRate;
    }
    get Sum$() {
        return this.#sum$;
    }
    set Sum$(newSum) {
        this.#sum$ = newSum;
    }
    get DollarRate() {
        return this.#dollarRate;
    }
    set DollarRate(newRate) {
        this.#dollarRate = newRate;
    }
    addMoney(moneyGrn) {
        const money$ = +(moneyGrn / this.#dollarRate).toFixed(2);
        this.#sum$ += money$;
        return this.#sum$;
    }
    removeMoney(moneyGrn) {
        const money$ = moneyGrn / this.#dollarRate;
        if (money$ > this.#sum$) {
            throw new Error("Not enough money");
        }
        else {
            this.#sum$ -= money$;
        }
        return this.#sum$;
    }
    newDollarRate(number) {
        if (this.#sum$ === 0) {
            throw new Error("Incorrect sum");
        }
        const sumGrn = this.#sum$ * this.#dollarRate;
        this.#newRate$ = (sumGrn + number) / this.#sum$;
        return +(this.#newRate$).toFixed(2);
    }
    toString() {
        const sumGrm = this.#sum$ * this.#dollarRate;
        return `Сума в $ = ${this.#sum$.toFixed(2)}<br> Сума в Grn = ${sumGrm}<br>При курсі $  ${this.#dollarRate}<br>Новий  курс $ =${this.#newRate$.toFixed(2)} `;
    }
}
const money = new TMoney();
console.log(money.Sum$);
console.log(money.addMoney(10000));
console.log(money.removeMoney(550));
console.log(money.newDollarRate(100));
document.write(`${money.toString()}`);
//# sourceMappingURL=task5.js.map