"use strict";
// Розробити калькулятор
const num1 = document.getElementById("first");
const num2 = document.getElementById("second");
// додавання
function getSum() {
    //   const num1 = document.getElementById("first") as HTMLInputElement;
    const value1 = parseInt(num1.value);
    //   const num2 = document.getElementById("second") as HTMLInputElement;
    const value2 = parseInt(num2.value);
    const sum = value1 + value2;
    console.log(sum);
    let resAdd = document.getElementById("result");
    resAdd.value = sum.toString();
}
const btnAdd = document.getElementById("add");
btnAdd.onclick = getSum;
// віднімання
function subtraction() {
    //   const num1 = document.getElementById("first") as HTMLInputElement;
    const value1 = parseInt(num1.value);
    //   const num2 = document.getElementById("second") as HTMLInputElement;
    const value2 = parseInt(num2.value);
    const difference = value1 - value2;
    let resAdd = document.getElementById("result");
    resAdd.value = difference.toString();
}
const btnMinus = document.getElementById("minus");
btnMinus.onclick = subtraction;
// множення
function getProduct() {
    //   const num1 = document.getElementById("first") as HTMLInputElement;
    const val1 = parseInt(num1.value);
    //   const num2 = document.getElementById("second") as HTMLInputElement;
    const val2 = parseInt(num2.value);
    const product = val1 * val2;
    const result = document.getElementById("result");
    result.value = product.toString();
}
const btnMultiply = document.getElementById("multiply");
btnMultiply.onclick = getProduct;
// ділення
function getDivide() {
    // const num1 = document.getElementById("first") as HTMLInputElement
    const value1 = parseInt(num1.value);
    // const num2 = document.getElementById("second") as HTMLInputElement
    const value2 = parseInt(num2.value);
    const dividing = value1 / value2;
    const result = document.getElementById("result");
    result.value = dividing.toFixed(2).toString();
}
const btnDivide = document.getElementById("divide");
btnDivide.onclick = getDivide;
//# sourceMappingURL=task1.js.map