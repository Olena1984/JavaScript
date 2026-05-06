/* З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.
 */

// ітератор для двох чисел
const min: number = 1;
const max: number = 7;

function iterator(min: number, max: number) {
  let minNumber: number = min - 1;
  function increment() {
    minNumber++;
    if (minNumber > max) {
      minNumber = min;
    }
    return minNumber;
  }
  return increment;
}
const resCounter = iterator(min, max);
const printResult: number = 20;

for (let i = 0; i < printResult; i++) {
  console.log(resCounter())
}

// перебіг по місяцях
const firstMonth: number = 1;
const lastMonth: number = 12;

function countMonth(monthStart: number, monthFinish: number) {
  let currentMonth: number = monthStart - 1;
  function incrementMonth() {
    currentMonth++;
    if (currentMonth > monthFinish) {
      currentMonth = monthStart
    }
     return currentMonth;
  }
  return incrementMonth;
}
const monthCounter = countMonth(firstMonth, lastMonth);
const iterationCount = 30

for (let i = 0; i < iterationCount; i++) {
    console.log(monthCounter());  
}
