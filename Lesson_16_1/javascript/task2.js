"use strict";
class Shop {
    #stock = [];
    #revenue = 0;
    constructor(stock, revenue) {
        this.Stock = stock;
        this.Revenue = revenue;
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
    set Revenue(newRevenue) {
        this.#revenue = newRevenue;
    }
    sellingProduct(name) {
        const saleItem = this.#stock.find((element) => element.name === name);
        if (!saleItem) {
            throw new Error("Not find this product");
        }
        else if (saleItem.quantity <= 0) {
            throw new Error("Can't sale - quantity =0");
        }
        else {
            saleItem.quantity -= 1;
            this.#stock.push(saleItem);
            this.#revenue = this.Revenue + saleItem.price;
        }
        return saleItem;
    }
    toString() {
        const newList = this.#stock.map((item) => `name - ${item.name}--//-- quantity - ${item.quantity}--//-- price - ${item.price}`);
        return ` ${newList.join('<br>')} `;
    }
}
const clothingList = [
    {
        name: "top",
        quantity: 10,
        price: 50,
    },
    {
        name: "skirt",
        quantity: 30,
        price: 200,
    },
    {
        name: "jacket",
        quantity: 5,
        price: 500,
    },
    {
        name: "shorts",
        quantity: 50,
        price: 700,
    },
];
const shop = new Shop(clothingList, 0);
console.log(shop.sellingProduct("jacket"));
console.log(shop.sellingProduct("top"));
console.log(shop.sellingProduct("shorts"));
console.log(shop.sellingProduct("jacket"));
console.log(shop.Revenue);
document.write(` ${shop.toString()}<br> Total revenue = ${shop.Revenue}`);
//# sourceMappingURL=task2.js.map