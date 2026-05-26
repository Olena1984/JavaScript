"use strict";
const cashInAtm = {
    banknote5: {
        value: 5,
        quantity: 100,
    },
    banknote10: {
        value: 10,
        quantity: 500,
    },
    banknote20: {
        value: 20,
        quantity: 1260,
    },
    banknote50: {
        value: 50,
        quantity: 4500,
    },
    banknote100: {
        value: 100,
        quantity: 5000,
    },
    banknote200: {
        value: 200,
        quantity: 9000,
    },
};
class ATM {
    #atmCash = {
        banknote5: {
            value: 5,
            quantity: 0,
        },
        banknote10: {
            value: 10,
            quantity: 0,
        },
        banknote20: {
            value: 20,
            quantity: 0,
        },
        banknote50: {
            value: 50,
            quantity: 0,
        },
        banknote100: {
            value: 100,
            quantity: 0,
        },
        banknote200: {
            value: 200,
            quantity: 0,
        },
    };
    constructor(atmCash) {
        this.AtmCash = atmCash;
    }
    get AtmCash() {
        return this.#atmCash;
    }
    set AtmCash(newCash) {
        this.#atmCash = newCash;
    }
    getMaxSum() {
        let maxSum = 0;
        for (const key in this.AtmCash) {
            const banknote = this.AtmCash[key];
            maxSum += banknote.value * banknote.quantity;
        }
        return maxSum;
    }
    getMinSum() {
        for (const key in this.AtmCash) {
            const banknote = this.AtmCash[key];
            if (banknote.quantity > 0) {
                return banknote.value;
            }
        }
    }
    withdrawalCash(cash) {
        if (cash % this.AtmCash.banknote5.value !== 0) {
            throw new Error("incorrect value");
        }
        else if (cash > this.getMaxSum()) {
            throw new Error("Недостатньо коштів для видачі");
        }
        else {
            //перетворюю об'єкт в масив і розвертаю значення від більшого до меншого
            const arrayObj = Object.entries(this.AtmCash).toReversed();
            const moneyToGive = [];
            for (const element of arrayObj) {
                const banknote = element[1];
                // скільки це буде купюр починаючи з найвищого номіналу
                const nominalOfBanknote = Math.floor(cash / banknote.value);
                // скільки банкнот можна взяти
                const billsToGive = Math.min(nominalOfBanknote, banknote.quantity);
                if (billsToGive > 0) {
                    moneyToGive.push({
                        nominal: banknote.value,
                        count: billsToGive
                    });
                    cash -= banknote.value * billsToGive;
                    banknote.quantity -= billsToGive;
                }
            }
            if (cash > 0) {
                throw new Error("Недостатньо коштів до видачі");
            }
            console.log(moneyToGive);
            const receipt = moneyToGive.map(element => `Ваш чек:<br>Номінал банкноти ${element.nominal} = кількість банкнот -${element.count}шт.`).join('<br>');
            return receipt;
        }
    }
    toString() {
        return `Максимальна сума грошей у банкоматі = ${this.getMaxSum()}у.о, мінімальна сума =${this.getMinSum()}у.о.<br> ${this.withdrawalCash(4500)} `;
    }
}
const atm = new ATM(cashInAtm);
console.log(atm.AtmCash);
console.log(atm.getMaxSum());
console.log(atm.getMinSum());
console.log(atm.withdrawalCash(4500));
document.write(`${atm.toString()}`);
//# sourceMappingURL=task7.js.map