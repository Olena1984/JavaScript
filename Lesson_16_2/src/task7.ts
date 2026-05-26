// Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

type MoneyType = {
  banknote: number;
  quantity: number;
};

class ATM {
  #banknotesAtm: MoneyType[] = [
    {
      banknote: 5,
      quantity: 0,
    },
    {
      banknote: 10,
      quantity: 0,
    },
    {
      banknote: 20,
      quantity: 0,
    },
    {
      banknote: 50,
      quantity: 0,
    },
    {
      banknote: 100,
      quantity: 0,
    },
    {
      banknote: 200,
      quantity: 0,
    },
  ];
  maxSum: number = 0;
  minSum: any = 0;
  constructor(banknotesAtm: MoneyType[]) {
    this.BanknotesAtm = banknotesAtm;
  }
  get BanknotesAtm() {
    return this.#banknotesAtm;
  }
  set BanknotesAtm(newBanknotes: MoneyType[]) {
    this.#banknotesAtm = newBanknotes;
  }
  getMaxSum(): number {
    this.maxSum = this.BanknotesAtm.reduce(
      (prevSum, item) => prevSum + item.banknote * item.quantity,
      0,
    );
    return this.maxSum;
  }
  getMinSum(): number {
    this.minSum = this.BanknotesAtm.find((item) => item.quantity > 0);
    const min = this.minSum ? this.minSum.banknote : 0;
    return min;
  }
  cashWithdrawal(cash: number) {
    if (cash > this.maxSum || cash % 5 !== 0) {
      throw new Error("incorrect cash");
    } else {
      const reversedArr = this.BanknotesAtm.map((item) => item).reverse();
      console.log(reversedArr);

      let countBanknote;
      for (const element of reversedArr) {
        //   скільки потрібно взяти банкнот на певну суму
        countBanknote = Math.floor(cash / element.banknote);
        const minQuantity = Math.min(countBanknote, element.quantity);
        cash -= minQuantity * element.banknote;
        element.quantity -= minQuantity;
      }
      if (cash > 0) {
        throw new Error("not enough money");
      }
    }
    const newSum = this.getMaxSum();

    return newSum;
  }

  toString() {
    return `Максимальна сума після зняття готівки = ${this.getMaxSum()}<br> мінімальна = ${this.getMinSum()}`;
  }
}
const banknotes: MoneyType[] = [
  {
    banknote: 5,
    quantity: 1000,
  },
  {
    banknote: 10,
    quantity: 20000,
  },
  {
    banknote: 20,
    quantity: 17000,
  },
  {
    banknote: 50,
    quantity: 4000,
  },
  {
    banknote: 100,
    quantity: 50000,
  },
  {
    banknote: 200,
    quantity: 10000,
  },
];
const atm = new ATM(banknotes);
console.log(atm.BanknotesAtm);
console.log(atm.getMaxSum());
console.log(atm.getMinSum());
console.log(atm.cashWithdrawal(3500));
document.write(`${atm.toString()}`);
