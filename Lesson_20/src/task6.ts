//  Список, у якому можна вибирати елементи (вибраний елемент підсвічується рамкою).

class List {
  newList: HTMLOListElement;
  constructor(public list: string[]) {
    this.newList = this.createList();
  }
  createList() {
    const olEl = document.createElement("ol");
    olEl.className = "items";
    this.list.forEach((element) => {
      const liEl = document.createElement("li");
      const inputEl = document.createElement("input");
       inputEl.type = "checkbox";
      const labelEl = document.createElement("label");
      labelEl.className = "item";
      
      labelEl.innerText = element;
        labelEl.prepend(inputEl);
      liEl.append(labelEl);
      olEl.append(liEl);
    });

    return olEl;
  }
  checkedList() { 
   this.newList.onclick = function (event:Event) {
    const targetEl = event.target as HTMLLabelElement
    if (targetEl.tagName === 'LABEL') {
        targetEl.classList.toggle('checked')
    }
   }
  }
  render() {
    const container = document.querySelector(".list");
    if (container) {
      container.append(this.newList);
    }
    this.checkedList()
  }
}
const listA: string[] = [
  "вивчити іноземну мову",
  "поїхати в подорож",
  "полетіти на проплані",
  "зійти на вершину гори","відвідати концерт улюбленого гурту"
];
window.onload = function () {
  const getList = new List(listA);
    getList.render();
};
