"use strict";
class CreateElement {
  constructor(fact, count) {
    this.factText = fact;
    this.factCount = count +1
    this.divEl = this.createDivElement();
    
  }
  createDivElement() {
    
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const pEl = document.createElement("p");
    pEl.innerText = this.factText;
    h3El.innerText = `Факт про котика № ${this.factCount}`;
    divEl.className = "block";
    divEl.append(h3El);
    divEl.append(pEl);
    return divEl;
  }
  render() {
    const container = document.querySelector(".cat-facts");
    if (container) container.append(this.divEl);
  }
}

class LoadDate {
  constructor() {}
  async getCatsFacts() {
    // let response= await fetch('https://meowfacts.herokuapp.com/')
    let response = await fetch(
      "https://meowfacts.herokuapp.com/?lang=ukr&count=10",
    );
    if (response.ok) {
      const date = await response.json();
      console.log(date.data);
      return date.data;
    }
  }
}
async function initLoad() {
  const server = new LoadDate();
  const textArray = await server.getCatsFacts();
  textArray.forEach((element, index) => {
    const getFact = new CreateElement(element, index);
    getFact.render();
  });
}
initLoad();
