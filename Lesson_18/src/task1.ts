// Розробити калькулятор


const num1 = document.getElementById("first") as HTMLInputElement;
const num2 = document.getElementById("second") as HTMLInputElement;
// додавання
function getSum() {
//   const num1 = document.getElementById("first") as HTMLInputElement;
  const value1 = parseInt(num1.value);

//   const num2 = document.getElementById("second") as HTMLInputElement;
  const value2 = parseInt(num2.value);

  const sum: number = value1 + value2;
  console.log(sum);

  let resAdd = document.getElementById("result") as HTMLInputElement;
  resAdd.value = sum.toString();
}
const btnAdd = document.getElementById("add") as HTMLButtonElement;
btnAdd.onclick = getSum;
// віднімання

function subtraction() {
//   const num1 = document.getElementById("first") as HTMLInputElement;
  const value1 = parseInt(num1.value);

//   const num2 = document.getElementById("second") as HTMLInputElement;
  const value2 = parseInt(num2.value);

  const difference: number = value1 - value2;

  let resAdd = document.getElementById("result") as HTMLInputElement;
  resAdd.value = difference.toString();
}
const btnMinus = document.getElementById("minus") as HTMLButtonElement;
btnMinus.onclick = subtraction;

// множення
function getProduct() {
//   const num1 = document.getElementById("first") as HTMLInputElement;
  const val1 = parseInt(num1.value);

//   const num2 = document.getElementById("second") as HTMLInputElement;
  const val2 = parseInt(num2.value);

  const product = val1 * val2;

  const result = document.getElementById("result") as HTMLInputElement;
  result.value = product.toString();
}
const btnMultiply = document.getElementById("multiply") as HTMLButtonElement;
btnMultiply.onclick = getProduct;

// ділення
function getDivide() {
  // const num1 = document.getElementById("first") as HTMLInputElement
  const value1 = parseInt(num1.value);

  // const num2 = document.getElementById("second") as HTMLInputElement
  const value2 = parseInt(num2.value);

  const dividing = value1 / value2;

  const result = document.getElementById("result") as HTMLInputElement;
  result.value = dividing.toFixed(2).toString();
}
const btnDivide = document.getElementById("divide") as HTMLButtonElement;
btnDivide.onclick = getDivide;
