"use strict";
class Pizzeria {
    #ingredients = [];
    #orders = 0;
    constructor(ingredients = [], orders = 0) {
        this.Ingredients = ingredients;
        this.Orders = orders;
    }
    get Ingredients() {
        return this.#ingredients;
    }
    set Ingredients(newIngredients) {
        this.#ingredients = newIngredients;
    }
    get Orders() {
        return this.#orders;
    }
    set Orders(newOrders) {
        this.#orders = newOrders;
    }
    ordering(name) {
        const findIngredient = this.#ingredients.find((element) => element.name === name);
        if (!findIngredient) {
            throw new Error("No this ingredient");
        }
        else if (findIngredient.quantity <= 0) {
            throw new Error("Not enough ingredient");
        }
        else {
            findIngredient.quantity -= 1;
            this.#orders = this.Orders + 1;
        }
        return findIngredient;
    }
    toString() {
        const order = this.#ingredients.map(item => `${item.name} - ${item.quantity}`);
        return `<p> Залишок шнгредієнтів після замовлення <br>${order.join('<br>')}<br> Total orders = ${this.#orders}</p>`;
    }
}
const ingredientsList = [
    {
        name: "tomato",
        quantity: 30,
    },
    {
        name: "lettuce",
        quantity: 20,
    },
    {
        name: "mozzarella",
        quantity: 10,
    },
    {
        name: "salami",
        quantity: 20,
    },
];
const pizza = new Pizzeria(ingredientsList, 0);
console.log(pizza.ordering('tomato'));
console.log(pizza.ordering('lettuce'));
console.log(pizza.ordering('mozzarella'));
console.log(pizza.ordering('salami'));
document.write(` ${pizza.toString()}`);
//# sourceMappingURL=task3.js.map