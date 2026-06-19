// Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.

class InputForm {
  inputElement: HTMLDivElement;
  constructor() {
    this.inputElement = this.createInput();
  }
  createInput() {
    const divEl = document.createElement("div");
    divEl.className = "input-form";
    const inputEl = document.createElement("input");
    inputEl.type = "color";
    divEl.append(inputEl);
    return divEl;
  }
  render() {
    const container = document.querySelector(".container-form");
    if (container) container.append(this.inputElement);
  }
}

class ChanceColor {
  colorInput: string = "";
  changeColor: number = 0;
  constructor(public input: InputForm) {}
  getColor() {
    // const input = document.querySelector('input') as HTMLInputElement
    const input = this.input.inputElement.querySelector(
      "input",
    ) as HTMLInputElement;
    const inputColor = input.value;
    this.colorInput = inputColor;

    localStorage.setItem("color", this.colorInput);
    this.setColor();
    this.countChanges();
  }
  initEvents() {
    this.input.inputElement.querySelector("input")!.onchange =
      this.getColor.bind(this);
  }
  setColor() {
    this.colorInput = String(localStorage.getItem('color'))
    const body = document.body;
    body.style.backgroundColor = this.colorInput;
    localStorage.setItem("backgroundColor", this.colorInput);
  }
  countChanges() {
    this.changeColor++;
    sessionStorage.setItem("changeColor", String(this.changeColor));
    const divEl = document.querySelector(".click-number") as HTMLDivElement;
    divEl.innerText = String(this.changeColor);
  }
}
const input = new InputForm();
const color = new ChanceColor(input);
color.initEvents()
window.onload = function () {
  input.render();
  color.setColor()
};
