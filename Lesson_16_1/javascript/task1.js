"use strict";
class Backpack {
    #weight = 0;
    #items = [];
    #checkWeight = 10;
    #newList = [];
    constructor(weight = 0, items) {
        this.Weight = weight;
        this.Items = items;
    }
    get Weight() {
        return this.#weight;
    }
    checkingWeight(name) {
        const currentItem = this.#items.find((element) => element.name === name);
        if (!currentItem) {
            throw new Error("error");
        }
        else if (this.Weight + currentItem.weight > this.#checkWeight) {
            throw new Error("error weight");
        }
        else {
            const copy = JSON.parse(JSON.stringify(currentItem));
            this.#newList.push(copy);
            this.#weight = this.Weight + currentItem.weight;
        }
        return this.#newList;
    }
    get Items() {
        return this.#items;
    }
    set Weight(newWeight) {
        this.#weight = newWeight;
    }
    set Items(newItems) {
        this.#items = newItems;
    }
    toString() {
        const list = this.#newList.map((item) => `${item.name} ${item.weight}`);
        return `${list}`;
    }
}
const listItems = [
    {
        name: "camera",
        weight: 1,
    },
    {
        name: "books",
        weight: 2,
    },
    {
        name: "laptop",
        weight: 5,
    },
    {
        name: "jacket",
        weight: 2,
    },
    {
        name: "bottle",
        weight: 2,
    },
    {
        name: "sleeping bag",
        weight: 2,
    },
    {
        name: "tent",
        weight: 4,
    },
];
const backpack = new Backpack(0, listItems);
for (const item of listItems) {
    try {
        backpack.checkingWeight(item.name);
    }
    catch (error) {
        console.log(`${item.name} - ${item.weight}`);
    }
}
document.write(` ${backpack.toString()}`);
// ---------------------------------------------------------------------------
// class Backpack {
//   #weight: number = 0;
//   #items: string[] = [];
//   #checkWeight: number = 10;
//   #weightItems:number[]=[]
//   constructor() {}
//   get Items() {
//     return this.#items;
//   }
//   get Weight() {
//     return this.#weight;
//   }
//   checkingWeight(newItem: string, weightItem: number) {
//     if (weightItem + this.#weight <= this.#checkWeight) {
//       this.#weight += weightItem;
//       this.#items.push(newItem);
//       this.#weightItems.push(weightItem)
//     }
//   }
//   toString() {
//     const res = this.#items.map((item, index)=> `${item} = ${this.#weightItems[index]}kg`)
//     return `List items:<br>${res.join("<br>")}<br>Total weight =  ${this.#weight}kg`;
//   }
// }
// const listItems: string[] = [
//   "camera",
//   "books",
//   "laptop",
//   "jacket",
//   "bottle",
//   "sleeping bag",
//   "tent",
// ];
// const weightItems: number[] = [1, 2, 5, 2, 2, 2, 4];
// const backPack = new Backpack();
// for (let i = 0; i < weightItems.length; i++) {
//   backPack.checkingWeight(listItems[i], weightItems[i]);
// }
// document.write(` ${backPack.toString()}`);
// console.log(backPack.Items);
// console.log(backPack.Weight);
//# sourceMappingURL=task1.js.map