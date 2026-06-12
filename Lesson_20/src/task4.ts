// На сторінці міститься певна кількість кнопок і інпутів. Підраховувати загальну кількість кліків окремо на кнопках і окремо на інпутах.

class Forms {
  countButton: number = 0;
  countInputs: number = 0;
  divBtnRes!:HTMLDivElement
  divInpRes!:HTMLDivElement
  constructor(
    public buttons: number,
    public inputs: number,
  ) {
  }

  createButton() {
    const btnEl = document.createElement("button");
    btnEl.innerText = "Click me";
    return btnEl;
  }
  createInput() {
    const labelEl = document.createElement("label");
    labelEl.innerText = "Поле для вводу: ";
    const inpEl = document.createElement("input");
    inpEl.type = "text";
    labelEl.append(inpEl);
    return labelEl;
  }
  countingElements() {
    const targetDiv = document.querySelector(".forms") as HTMLDivElement;
    targetDiv.onclick = (event: Event) => {
      console.log(event.target);

      const targetElBtn = event.target as HTMLButtonElement;
      if (targetElBtn.tagName === "BUTTON") {
        this.countButton += 1;
        this.divBtnRes.innerText = `Загальна кількість кліків на кнопках  = ${this.countButton}`
      }
      const targetElInp = event.target as HTMLInputElement;
      if (targetElInp.tagName === "INPUT") {
        this.countInputs += 1;
        this.divInpRes.innerText = `Загальна кількість кліків на інпутах  = ${this.countInputs}`;
      }
    };
  }
  displayBtnResults() {
    this.divBtnRes = document.createElement("div");
    this.divBtnRes.innerText = `Загальна кількість кліків на кнопках  = ${this.countButton}`;
    return this.divBtnRes;
  }
  displayInputResults() {
    this.divInpRes = document.createElement("div");
    this.divInpRes.innerText = `Загальна кількість кліків на інпутах  = ${this.countInputs}`;
    return this.divInpRes;
  }

  render() {
    const container = document.querySelector(".forms");
    if (container) {
      for (let b = 0; b < this.buttons; b++) {
        container.append(this.createButton());
      }
      for (let inp = 0; inp < this.inputs; inp++) {
        container.append(this.createInput());
      }
      container.append(this.displayBtnResults());
      container.append(this.displayInputResults());
    }

    this.countingElements();
  }
}

window.onload = function () {
  const forms = new Forms(10, 8);
  forms.render();
};
