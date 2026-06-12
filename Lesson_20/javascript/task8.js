"use strict";
// Дано список автомобілів (марка, рік випуску, ціна). Сформувати елементи для фільтрування з використанням випадаючого списку (контент цих випадаючих списків сформувати у залежності від переданого списку).
class SelectForm {
    title;
    array;
    selectElement;
    constructor(title, array) {
        this.title = title;
        this.array = array;
        this.selectElement = this.createSelect();
    }
    createSelect() {
        const divEl = document.createElement("div");
        const labelEl = document.createElement("label");
        labelEl.innerText = `${this.title}: `;
        const selectEl = document.createElement("select");
        const defaultOption = document.createElement("option");
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.innerText = "Зроби вибір...";
        defaultOption.value = "";
        selectEl.append(defaultOption);
        this.array.forEach((item) => {
            const optionEl = document.createElement("option");
            optionEl.innerText = item;
            selectEl.append(optionEl);
        });
        divEl.append(labelEl);
        divEl.append(selectEl);
        return divEl;
    }
    render() {
        const container = document.querySelector(".select-items");
        if (container)
            container.append(this.selectElement);
    }
}
class Choice {
    array;
    brandAuto;
    year;
    price;
    resultList = [];
    constructor(array, brandAuto, year, price) {
        this.array = array;
        this.brandAuto = brandAuto;
        this.year = year;
        this.price = price;
        this.resultList = this.array;
    }
    selectItem() {
        this.resultList = [];
        const findSelect = () => {
            const brandValue = this.brandAuto.selectElement.querySelector("select");
            const yearValue = this.year.selectElement.querySelector("select");
            const priceValue = this.price.selectElement.querySelector("select");
            const filterItem = this.array.filter((item) => (brandValue.value === "" || item.brand === brandValue.value) &&
                (yearValue.value === "" || item.year === Number(yearValue.value)) &&
                (priceValue.value === "" || item.price === Number(priceValue.value)));
            this.resultList = filterItem;
        };
        findSelect();
    }
    selected() {
        const divEl = document.querySelector(".select-items");
        divEl.onchange = (event) => {
            const selectEl = event.target;
            if (selectEl) {
                this.selectItem();
                const container = document.querySelector(".result");
                container.innerText = '';
                container.append(this.displayList());
            }
        };
    }
    displayList() {
        this.resultList = this.resultList;
        const divEl = document.createElement('div');
        divEl.className = 'result';
        const ulEl = document.createElement("ul");
        this.resultList.forEach((item) => {
            const liEl = document.createElement("li");
            liEl.innerText = `${item.brand} - ${item.year}р. - ${item.price}$`;
            ulEl.append(liEl);
        });
        divEl.append(ulEl);
        return divEl;
    }
    render() {
        const container = document.querySelector(".select-container");
        if (container)
            container.append(this.displayList());
        this.selectItem();
        this.selected();
    }
}
const arrayData = [
    {
        brand: "BMW",
        year: 2000,
        price: 45000,
    },
    {
        brand: "Renault Megane",
        year: 2020,
        price: 60000,
    },
    {
        brand: "Opel",
        year: 2010,
        price: 56000,
    },
    {
        brand: "Toyota",
        year: 2019,
        price: 56000,
    },
    {
        brand: "Fiat",
        year: 2019,
        price: 51000,
    },
    {
        brand: "Hundai",
        year: 2010,
        price: 55000,
    },
    {
        brand: "Honda",
        year: 2010,
        price: 36000,
    },
];
window.onload = function () {
    const brandAuto = arrayData.map((element) => element.brand);
    const yearAuto = [...new Set(arrayData.map((element) => element.year))];
    const priceAuto = [...new Set(arrayData.map((element) => element.price))];
    const selectBrand = new SelectForm("Марка авто", brandAuto);
    const selectYear = new SelectForm("Рік випуску", yearAuto);
    const selectPrice = new SelectForm("Ціна", priceAuto);
    selectBrand.render();
    selectYear.render();
    selectPrice.render();
    const choiceOptions = new Choice(arrayData, selectBrand, selectYear, selectPrice);
    choiceOptions.render();
};
//# sourceMappingURL=task8.js.map