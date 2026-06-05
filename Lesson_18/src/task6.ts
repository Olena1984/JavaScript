// Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

const parentBlock = document.getElementById("createTable") as HTMLBaseElement;

function createInput() {
  const tdEl = document.createElement("td");
  const inputEl = document.createElement("input");
  inputEl.classList.add("gradeInput");
  inputEl.setAttribute("type", "number");
  tdEl.append(inputEl);
  return tdEl;
}

function table() {
  const userNumber = document.getElementById("price") as HTMLInputElement;
  const numberRow = parseInt(userNumber.value);

  const table = document.createElement("table");
  for (let r = 0; r < numberRow; r++) {
    const trEl = document.createElement("tr");
    const tdEl = createInput();
    trEl.append(tdEl);
    table.append(trEl);
  }

  parentBlock.append(table);
  return table;
}
function average() {
  let sum: number = 0;
  const grades = document.querySelectorAll(".gradeInput");
  for (const grade of grades) {
    const input = grade as HTMLInputElement;
    sum += parseInt(input.value);
  }
  const avr = sum / grades.length
  const result = document.getElementById('sum_result') as HTMLBaseElement
  result.innerText = (`Середнє значення: ${avr.toFixed(2)}`)
  return avr
}
const btnTable = document.getElementById("table") as HTMLButtonElement;
btnTable.onclick = table;

const btnSum = document.getElementById('sum') as HTMLButtonElement
btnSum.onclick = average