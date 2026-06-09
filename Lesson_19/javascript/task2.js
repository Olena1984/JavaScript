"use strict";
// Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
const containerInput = document.getElementById("inputs");
containerInput.addEventListener("input", function (event) {
    const inputEl = event.target;
    if (inputEl.value && inputEl.tagName === "INPUT") {
        let currentInputValue = Number(inputEl.value);
        let prevInputEl = inputEl.previousElementSibling;
        while (prevInputEl) {
            if (prevInputEl.tagName === "INPUT") {
                currentInputValue -= 1;
                prevInputEl.value = currentInputValue.toString();
                prevInputEl = prevInputEl.previousElementSibling;
            }
            else {
                prevInputEl = prevInputEl.previousElementSibling;
                continue;
            }
        }
        let nextInputEl = inputEl.nextElementSibling;
        currentInputValue = Number(inputEl.value);
        while (nextInputEl) {
            if (nextInputEl.tagName === "INPUT") {
                currentInputValue += 1;
                nextInputEl.value = currentInputValue.toString();
                nextInputEl = nextInputEl.nextElementSibling;
            }
            else {
                nextInputEl = nextInputEl.nextElementSibling;
                continue;
            }
        }
    }
});
//# sourceMappingURL=task2.js.map