// Створити клас Client. На основі цього класу створити клас GoldenClient

class Client {
  constructor(
    public idClient: number,
    public clientName: string,
    public clientMoney: number,
  ) {}
  addMoney(newMoney: number) {
    const newClientMoney = this.clientMoney + newMoney;
    this.clientMoney = newClientMoney;
    return this.clientMoney;
  }
  getMoney(newMoney: number) {
    if (this.clientMoney > newMoney) {
      const newBalance = this.clientMoney - newMoney;
      this.clientMoney = newBalance;
      return this.clientMoney;
    } else {
      throw new Error("Недостатньо коштів");
    }
  }
  toString() {
    return `Клієнт:${this.clientName}. Кошти на рахунку = ${this.clientMoney}`;
  }
}

class GoldenClient extends Client {
  usedLimit: number = 0;
  constructor(
    public idClient: number,
    public clientName: string,
    public clientMoney: number,
    public creditLimit: number,
    public percentageOfCredit: number,
  ) {
    super(idClient, clientName, clientMoney);
  }
  removeMoney(newMoney: number) {
    let clientBalance = this.clientMoney;
    if (newMoney <= this.clientMoney) {
      clientBalance = this.clientMoney - newMoney;
      this.clientMoney = clientBalance;
    } else if (newMoney > this.clientMoney) {
      const difference = newMoney - this.clientMoney;
      this.clientMoney = 0;
      if (this.creditLimit > difference) {
        const newCreditLimit = this.creditLimit - difference;
        this.usedLimit = this.creditLimit - newCreditLimit;
        this.creditLimit = newCreditLimit;
      } else {
        throw new Error(
          `Ваш ліміт не дозволяє зняти кошти більше за ваш ліміт ${this.creditLimit}`,
        );
      }
    }
  }
  interestOfCredit() {
    const penaltyRate = (this.usedLimit * this.percentageOfCredit) / 100;
    return penaltyRate;
  }
  toString() {
    return `${super.toString()}. Ліміт кредитних коштів =${this.creditLimit}. % за використання кредитних коштів = ${this.interestOfCredit()}`;
  }
}

class ClientForm {
  form: HTMLDivElement;
  inputAddMoney!: HTMLInputElement;
  inputRemoveMoney!: HTMLInputElement;
  pBalance!: HTMLParagraphElement;
  pCredit!: HTMLParagraphElement;
  pPercentage!:HTMLParagraphElement
  constructor(public client: GoldenClient) {
    this.form = this.createForm();
  }
  createForm() {
    const divEl = document.createElement("div");
    divEl.className = "client";
    const title = document.createElement("h2");
    title.innerText = "Форма клієнта";
    const pEl = document.createElement("p");
    pEl.innerText = `Ім'я клієнта: ${this.client.clientName}`;
    const pEl2 = document.createElement("p");
    pEl2.innerText = `Id клієнта: ${String(this.client.idClient)}`;
    const pBalance = document.createElement("p");
    this.pBalance = pBalance;
    pBalance.innerText = `Баланс клієнта: ${String(this.client.clientMoney)} грн.`;

    const pCredit = document.createElement("p");
    this.pCredit = pCredit;
    pCredit.innerText = `Кредитний ліміт клієнта: ${String(this.client.creditLimit)} грн.\n Відсоткова ставка по кредиту ${this.client.percentageOfCredit}%`;

    const pPercentage = document.createElement('p')

    pPercentage.innerText = `Відсотки до сплати: ${this.client.interestOfCredit()} грн.`
    this.pPercentage = pPercentage

    const labelAddMoney = document.createElement("label");
    labelAddMoney.innerText = "Сума для внесення коштів:";
    const inputAddMoney = document.createElement("input");
    inputAddMoney.type = "number";
    this.inputAddMoney = inputAddMoney;
    const labelRemoveMoney = document.createElement("label");
    labelRemoveMoney.innerText = "Сума для зняття коштів:";
    const inputRemoveMoney = document.createElement("input");
    inputRemoveMoney.type = "number";
    this.inputRemoveMoney = inputRemoveMoney;

    divEl.append(title);
    divEl.append(pEl);
    divEl.append(pEl2);
    divEl.append(pBalance);
    divEl.append(pCredit);
    divEl.append(pPercentage);
    divEl.append(labelAddMoney);
    divEl.append(inputAddMoney);

    divEl.append(labelRemoveMoney);
    divEl.append(inputRemoveMoney);
    return divEl;
  }

  getValue() {
    const inputEl = this.inputAddMoney;
    const inputValue = String(inputEl.value);
    return inputValue;
  }
  setValue(newValue: string) {
    let inputEl = this.inputRemoveMoney;
    const inputValue = newValue;
    inputEl.value = String(inputValue);
  }
  render() {
    const container = document.querySelector(".client-form");
    if (container) container.append(this.form);
  }
}

window.onload = function () {
  const goldenClient = new GoldenClient(1234, "Jack", 20000, 100000, 5);
  const clientForm = new ClientForm(goldenClient);
  clientForm.render();

  const container = document.querySelector(".client");
  const button = document.createElement("button");
  if (container) {
    button.innerText = "Підтвердити";
    container.append(button);
  }

  button.onclick = function (event: Event) {
    const addMoney = Number(clientForm.inputAddMoney.value);
    goldenClient.addMoney(addMoney);
    clientForm.pBalance.innerText = `Баланс клієнта: ${goldenClient.clientMoney} грн.`;
    const getMoney = Number(clientForm.inputRemoveMoney.value);
    goldenClient.removeMoney(getMoney);
    clientForm.pCredit.innerText = `Кредитний ліміт клієнта: ${goldenClient.creditLimit} грн.\n Відсоткова ставка по кредиту ${goldenClient.percentageOfCredit}%`;
    clientForm.pPercentage.innerText =`Відсотки до сплати: ${goldenClient.interestOfCredit()} грн.`
  };
};
