"use strict";
// Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.
class isNotNumberError extends Error {
    constructor() {
        super();
        this.message = "Має бути число";
        this.name = "isNotNumberError";
    }
}
class isNotNumberOfMonthError extends Error {
    constructor() {
        super();
        this.message = "Число має бути від 1 до 12";
        this.name = "isNotNumberOfMonthError";
    }
}
class isNotStudyMonthsError extends Error {
    constructor() {
        super();
        this.message = "Канікули";
        this.name = "isNotStudyYearError";
    }
}
class inNotLess1AndMore100Error extends Error {
    constructor() {
        super();
        this.message = "Число має бути відіапазоні від 1 до 100";
        this.name = "inNotLess100Error";
    }
}
class notFilledFieldError extends Error {
    constructor() {
        super();
        this.message = "Не заповнене поле";
        this.name = "notFilledFieldError ";
    }
}
class Form {
    title;
    inputForm;
    constructor(title) {
        this.title = title;
        this.inputForm = this.createInput();
    }
    createInput() {
        const divEl = document.createElement("div");
        const labelEl = document.createElement("label");
        labelEl.innerText = `${this.title}: `;
        const inputEl = document.createElement("input");
        inputEl.type = "number";
        divEl.append(labelEl);
        divEl.append(inputEl);
        return divEl;
    }
    getValue() {
        const inputEl = this.inputForm.querySelector("input");
        const inputValue = String(inputEl.value);
        return inputValue;
    }
    setValue(newValue) {
        let inputEl = this.inputForm.querySelector("input");
        const inputValue = newValue;
        inputEl.value = String(inputValue);
    }
    render() {
        const container = document.querySelector(".form");
        if (container)
            container.append(this.inputForm);
    }
}
class Student {
    formMonth;
    formScore;
    constructor(formMonth, formScore) {
        this.formMonth = formMonth;
        this.formScore = formScore;
    }
    checkMonth() {
        const userMonth = this.formMonth.getValue();
        const numberOfMonth = Number(userMonth);
        try {
            if (userMonth === "")
                throw new notFilledFieldError();
            if (isNaN(numberOfMonth))
                throw new isNotNumberError();
            if (numberOfMonth < 1 || numberOfMonth > 12)
                throw new isNotNumberOfMonthError();
            if (numberOfMonth >= 6 && numberOfMonth < 9)
                throw new isNotStudyMonthsError();
        }
        catch (error) {
            if (error instanceof notFilledFieldError) {
                alert("Введіть дані для перевірки");
                this.formMonth.setValue("");
            }
            if (error instanceof isNotNumberError) {
                alert("Вводіть тільки числа");
                this.formMonth.setValue("");
            }
            if (error instanceof isNotNumberOfMonthError) {
                alert("Веедіть число, що відповідає номеру місяця (від 1 до 12)");
                this.formMonth.setValue("");
            }
            if (error instanceof isNotStudyMonthsError) {
                alert("Період Канікул!\nВВведіть номер місяця який не є в діапазоні (від 6 до 8)");
                this.formMonth.setValue("");
            }
        }
    }
    checkScore() {
        const userScore = this.formScore.getValue();
        const numberOfUserScore = Number(userScore);
        try {
            if (userScore === "")
                throw new notFilledFieldError();
            if (numberOfUserScore < 1 || numberOfUserScore > 100)
                throw new inNotLess1AndMore100Error();
        }
        catch (error) {
            if (error instanceof notFilledFieldError)
                alert("Введіть дані для перевірки");
            this.formScore.setValue("");
            if (error instanceof inNotLess1AndMore100Error) {
                alert("Ввудіть число у діапазоні від 1 до 100");
                this.formScore.setValue("");
            }
        }
    }
    ImproveScore() {
        const userMonth = Number(this.formMonth.getValue());
        const userScore = Number(this.formScore.getValue());
        const parentEl = document.querySelector(".container");
        const divEl = document.createElement("div");
        parentEl.append(divEl);
        if (userMonth !== 5 &&
            userMonth !== 12 &&
            userScore > 1 &&
            userScore < 30) {
            divEl.innerText = `Ваш бал ${userScore} нижче середнього. Ви ще можете виправити свою оцінку`;
        }
        else if ((userMonth === 5 || userMonth === 12) &&
            userScore > 1 &&
            userScore < 30) {
            divEl.innerText = `На жаль ви не зможете виправити свій бал - кінець навчального року`;
        }
        else {
            divEl.innerText = `Вітаємо ваш бал ${userScore}`;
        }
    }
}
window.onload = function () {
    const formMonth = new Form("Введіть номер місяця");
    const formScore = new Form("Введіть оцінку учня");
    formMonth.render();
    formScore.render();
    const container = document.querySelector(".form");
    const button = document.createElement("button");
    if (container) {
        button.innerText = "ОК";
        container.append(button);
    }
    button.onclick = function (event) {
        // const targetEl = event.target as HTMLButtonElement;
        const student = new Student(formMonth, formScore);
        student.checkMonth();
        student.checkScore();
        student.ImproveScore();
    };
};
//# sourceMappingURL=task1.js.map