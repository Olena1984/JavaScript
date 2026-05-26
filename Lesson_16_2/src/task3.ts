// Піцерія
// Клас із полями #ingredients і #orders. Замовлення можливі, якщо є інгредієнти.

type IngredientsType = {
  name: string;
  quantity: number;
};

class Pizzeria {
  #ingredients: IngredientsType[] = [];
  #orders: number = 0;
  constructor(ingredients: IngredientsType[] = []) {
    this.Ingredients = ingredients;
  }
  get Ingredients() {
    return this.#ingredients;
  }
  set Ingredients(newIngredients: IngredientsType[]) {
    this.#ingredients = newIngredients;
  }

  ordering(ingredient: string) {
    const findIn = this.#ingredients.find(
      (element) => element.name === ingredient,
    );
    if (findIn && findIn.quantity > 0) {
      findIn.quantity -= 1;
      this.#orders += 1;
      return `Замовлено ${findIn.name}, залишок = ${findIn.quantity} `;
    } else {
      throw new Error("Not enough ingredients ");
    }
  }
  toString() {
    const restIngredients = this.#ingredients
      .map((ingredient) => `${ingredient.name} = ${ingredient.quantity}`)
      .join("<br>");
    return ` Залишок інгредіентів:<br>${restIngredients}<br> Замовлень = ${this.#orders}`;
  }
}
const ingredients: IngredientsType[] = [
  {
    name: "salami",
    quantity: 50,
  },
  {
    name: "mushrooms",
    quantity: 30,
  },
  {
    name: "tomato",
    quantity: 100,
  },
  {
    name: "mozzarella",
    quantity: 100,
  },
  {
    name: "pineapple",
    quantity: 65,
  },
  {
    name: "corn",
    quantity: 100,
  },
];
const pizza = new Pizzeria(ingredients);
const order1 = ["salami", "corn", "pineapple", "mozzarella", "mozzarella"]
  .map((ingredient) => pizza.ordering(ingredient))
  .join("\n");
console.log(order1);
document.write(`${pizza.toString()}`);
