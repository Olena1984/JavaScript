// Наплічник
// Клас із полями #weight і #items. Дозвольте додавати предмети, якщо вага не перевищує 10 кг.

type ItemsType = {
  item: string;
  weight: number;
};

class Backpack {
  #weight: number = 0;
  #items: ItemsType[] = [];
  #controlWeight: number = 10;
  newList: ItemsType[] = []
  constructor(weight: number, items: ItemsType[]) {
    this.Weight = weight;
  }
  get Weight() {
    return this.#weight;
  }
  set Weight(newWeight: number) {
    this.#weight = newWeight;
  }
  get Items() {
    return this.#items;
  }

  addCheckedItems(items: ItemsType[]) {
    // const newList: ItemsType[] = [];
    items.forEach((element) => {
      if (element.weight + this.Weight <= this.#controlWeight) {
       this. newList.push(element);
        this.Weight += element.weight;
      }
    });
    this.#items = [...this.#items, ...this.newList];
    return this.newList;
  }

  toString(){
    const list = this.newList.map(item => `${item.item} = ${item.weight}`).join('<br>')
    return `Список передметів, що помітилися в наплічник:<br> ${list} `
  }
}
const items: ItemsType[] = [
  { item: "book", weight: 5 },
  { item: "laptop", weight: 2 },
  { item: "bottleWater", weight: 1 },
  { item: "jacket", weight: 1.5 },
  { item: "tent", weight: 4 },
  { item: "boots", weight: 1 },
  { item: "food", weight: 3 },
];
console.log(items);

const backpack = new Backpack(0, items);
console.log(backpack.addCheckedItems(items));
console.log(backpack.Weight);
console.log(backpack.Items);
document.write(`<p> ${backpack.toString()}</p>`)
