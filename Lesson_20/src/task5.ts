//  Бронювання таксі та велосипедів. Відображаються списки авто та велосипедів, які можна забронювати. При бронюванні вибрані авто та вибрані велосипеди відображаються у окремих списках.

class Transport {
  list: HTMLDivElement;
  checkedList: string[] = [];
  constructor(
    public title: string,
    public arrayList: string[],
    public checkbox: boolean = true,
  ) {
    this.list = this.createList();
  }
  createList() {
    const divEl = document.createElement("div");
    divEl.className = "list-container";
    this.arrayList.forEach((element) => {
      const labelEl = document.createElement("label");
      if (this.checkbox) {
        const inputEl = document.createElement("input");
        inputEl.type = "checkbox";
        labelEl.append(inputEl);
      }
      const spanEl = document.createElement("span");
      spanEl.innerText = element;

      labelEl.append(spanEl);
      divEl.append(labelEl);
    });
    return divEl;
  }
  getCheckedItems() {
    this.checkedList = [];
    const inputs = this.list.querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.checked) {
        const valueInput = input.nextElementSibling as HTMLSpanElement;
        this.checkedList.push(valueInput.innerText);
      }
    });
    return this.checkedList;
  }

  render() {
    const container = document.querySelector(".tratsports");
    if (container) {
      const titleEl = document.createElement("h2");
      titleEl.className = "title";
      titleEl.innerText = `${this.title}:`;
      container.append(titleEl);
      container.append(this.list);
    }
  }
}
class Booking {
  constructor(
    public btnTitle: string,
    public OnClick: () => void,
  ) {}
  createBookingButton() {
    const btnEl = document.createElement("button");
    btnEl.className = "booking";
    btnEl.innerText = this.btnTitle;
    btnEl.addEventListener("click", this.OnClick);
    return btnEl;
  }

  render() {
    const container = document.querySelector(".tratsports");
    if (container) {
      container.append(this.createBookingButton());
    }
  }
}

const carList: string[] = [
  "Toyota Corolla",
  "Tesla Model 3",
  "Hyundai Tucson",
  "Renault Magane",
];
const bicycleList: string[] = [
  "Giant Talon 4",
  "Trek FX 2",
  "Specialized Sirrus",
  "MARIN Team Marin 29",
];
window.onload = function () {
  const transport = new Transport("Доступні автомобілі", carList);
  const bicycle = new Transport("Доступні велосипеди", bicycleList);
  transport.render();
  bicycle.render();
  const button = new Booking("Booking", () => {
    const cars = transport.getCheckedItems();
    const bikes = bicycle.getCheckedItems();
    const bookingCars = new Transport("Заброньовані автомобілі", cars, false);
    const bookingBikes = new Transport("Заброньовані велосипеди", bikes, false);

    bookingCars.render();
    bookingBikes.render();
  });

  button.render();
};
