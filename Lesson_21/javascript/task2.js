"use strict";
// Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків)
class Person {
    personName;
    personAge;
    address;
    constructor(personName, personAge, address) {
        this.personName = personName;
        this.personAge = personAge;
        this.address = address;
    }
    getBirthYear() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const personBirthYear = year - this.personAge;
        return personBirthYear;
    }
    toString() {
        return `Ім"я - ${this.personName}, кількість років - ${this.personAge}, адреса проживання - ${this.address}`;
    }
}
class Worker1 extends Person {
    personName;
    personAge;
    address;
    position;
    rateOfPay;
    tax;
    constructor(personName, personAge, address, position, rateOfPay, tax) {
        super(personName, personAge, address);
        this.personName = personName;
        this.personAge = personAge;
        this.address = address;
        this.position = position;
        this.rateOfPay = rateOfPay;
        this.tax = tax;
    }
    amountPaidForYear() {
        const amountForYear = this.rateOfPay * 12;
        return amountForYear;
    }
    amountTaxForYear() {
        const taxForYear = (this.amountPaidForYear() * this.tax) / 100;
        console.log(taxForYear);
        return taxForYear;
    }
    toShow() {
        return `${super.toString()}. Посада = ${this.position}, зарплата = ${this.rateOfPay}. Зарплата за рік = ${this.amountPaidForYear()}, сплачені податки за рік = ${this.amountTaxForYear()}  `;
    }
}
class RenderTable {
    worker;
    constructor(worker) {
        this.worker = worker;
    }
    createTable() {
        const parentEl = document.querySelector(".worker");
        const tableEl = document.createElement("table");
        tableEl.className = "worker-table";
        const trEl = document.createElement("tr");
        const headers = ["Ім'я", "Роки", "Адреса", "Посада", "Зарплата за рік", "Податки за рік"];
        for (let index = 0; index < headers.length; index++) {
            const thEl = document.createElement("th");
            thEl.innerText = `${headers[index]}`;
            trEl.append(thEl);
        }
        const dateHeaders = [`${this.worker.personName}`, `${this.worker.personAge}`, `${this.worker.address}`, `${this.worker.position}`, `${this.worker.amountPaidForYear()}`, `${this.worker.amountTaxForYear()}`];
        const trEl2 = document.createElement('tr');
        for (let i = 0; i < dateHeaders.length; i++) {
            const tdEl = document.createElement("td");
            tdEl.innerText = `${dateHeaders[i]}`;
            trEl2.append(tdEl);
        }
        parentEl.append(tableEl);
        tableEl.append(trEl);
        tableEl.append(trEl2);
        return tableEl;
    }
}
window.onload = function () {
    const person = new Person("Olena", 41, "Lviv");
    const worker = new Worker1("Olena", 41, "Lviv", "manager", 50000, 30);
    const renderTable = new RenderTable(worker);
    renderTable.createTable();
};
//# sourceMappingURL=task2.js.map