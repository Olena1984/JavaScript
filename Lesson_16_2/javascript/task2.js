"use strict";
// Магазин
// Клас із полями #stock (масив з товарами (назва, кількість)) і #revenue. Дозвольте продавати товар, якщо є запас.
class Shop {
    #stock = [];
    #revenue = 0;
    constructor(stock = []) {
        this.Stock = stock;
    }
    get Stock() {
        return this.#stock;
    }
    set Stock(newStock) {
        this.#stock = newStock;
    }
    get Revenue() {
        return this.#revenue;
    }
    selling(nameItem) {
        const findItem = this.Stock.find((element) => element.name === nameItem);
        if (!findItem || findItem.quantity <= 0) {
            throw new Error("Not find item");
        }
        else {
            findItem.quantity -= 1;
            this.#revenue += findItem.price;
            return `Продано ${findItem.name} - Залишок = ${findItem.quantity} шт.`;
        }
    }
    toString() {
        const newList = this.#stock
            .map((element) => `${element.name} - ${element.quantity}шт. Ціна = ${element.price}`)
            .join("<br>");
        return `Прибуток становить - ${this.#revenue}<br>Кількість товару на залишку:<br>${newList}`;
    }
}
const shop = [
    {
        name: "skirt",
        quantity: 23,
        price: 500,
    },
    {
        name: "shorts",
        quantity: 35,
        price: 500,
    },
    {
        name: "jacket",
        quantity: 50,
        price: 500,
    },
    {
        name: "T-shirt",
        quantity: 100,
        price: 500,
    },
    {
        name: "shirt",
        quantity: 60,
        price: 500,
    },
];
const shopping = new Shop(shop);
console.log(shopping.Stock);
const sell = ["skirt", "jacket", "shorts"]
    .map((name) => shopping.selling(name))
    .join("\n");
console.log(sell);
console.log(shopping.Revenue);
document.write(`${shopping.toString()}`);
//# sourceMappingURL=task2.js.map