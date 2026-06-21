"use strict";
class Product {
    nameProduct;
    price;
    quantity;
    constructor(nameProduct, price, quantity) {
        this.nameProduct = nameProduct;
        this.price = price;
        this.quantity = quantity;
    }
}
class Shop {
    Product;
    constructor(Product) {
        this.Product = Product;
    }
    [Symbol.iterator]() {
        let index = 0;
        let product = this.Product;
        return {
            next() {
                if (index >= product.length) {
                    return { done: true };
                }
                else {
                    let currentIndex = product[index];
                    index++;
                    return { done: false, value: `${currentIndex.name} = ${currentIndex.price * currentIndex.quantity}` };
                }
            },
        };
    }
}
const products = [
    {
        name: "milk",
        price: 37,
        quantity: 200,
    },
    {
        name: "ice-cream",
        price: 60,
        quantity: 1200,
    },
    {
        name: "cream",
        price: 50,
        quantity: 500,
    },
    {
        name: "cookie",
        price: 45,
        quantity: 2000,
    },
    {
        name: "bread",
        price: 37,
        quantity: 2500,
    },
];
const shop = new Shop(products);
for (const element of shop) {
    console.log(element);
    document.write(`${element}<br>`);
}
//# sourceMappingURL=task2.js.map