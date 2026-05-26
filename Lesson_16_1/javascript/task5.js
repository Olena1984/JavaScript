"use strict";
/*
Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

*/
class TMoney {
    #exchangeRate = 45;
    #sumDollars = 0;
    #prevSum$ = 0;
    constructor(exchangeRate = 45, sumDollars = 0) {
        this.ExchangeRate = exchangeRate;
        this.SumDollars = sumDollars;
    }
    get ExchangeRate() {
        return this.#exchangeRate;
    }
    set ExchangeRate(newExchangeRate) {
        this.#exchangeRate = newExchangeRate;
    }
    get SumDollars() {
        return this.#sumDollars;
    }
    set SumDollars(newSum) {
        this.#sumDollars = newSum;
    }
    addMoney(money) {
        const convertTo$ = Math.floor(money / this.ExchangeRate);
        if (convertTo$ < 0) {
            throw new Error("error money");
        }
        else {
            this.SumDollars += convertTo$;
        }
        return this.SumDollars;
    }
    removeMoney(money) {
        this.#prevSum$ = this.#sumDollars;
        const convertTo$ = Math.floor(money / this.ExchangeRate);
        console.log(convertTo$);
        if (this.SumDollars < convertTo$) {
            throw new Error("not enough money");
        }
        else {
            this.SumDollars -= convertTo$;
        }
        return this.SumDollars;
    }
    determinationRate(money) {
        if (this.SumDollars < 0) {
            throw new Error("error");
        }
        console.log(this.#sumDollars);
        const sumGrn = this.SumDollars * this.ExchangeRate + money;
        console.log(sumGrn);
        const newRate = Math.floor(sumGrn / this.SumDollars);
        return newRate;
    }
    toString() {
        return `<p> Курс $:${this.#exchangeRate}грн.<br>додали ${moneyToAdd}грн - сума в $= ${this.#prevSum$}$ <br>забрали ${moneyRemove} грн.- сума сума в $= ${this.#sumDollars}$<br> курс $(при якому сума у гривнях збільшиться на 100) = ${this.determinationRate(100)}$ </p>`;
    }
}
const moneyToAdd = 500;
const moneyRemove = 120;
const incrementMoney = 100;
const money = new TMoney();
console.log(money.addMoney(moneyToAdd));
console.log(money.removeMoney(moneyRemove));
console.log(money.determinationRate(incrementMoney));
document.write(`<p> ${money.toString()}</p>`);
//# sourceMappingURL=task5.js.map