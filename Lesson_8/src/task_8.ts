/* Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш. */

/* 
1. створюю масив з певною кількістю елементів
2. генерую рандомні значення і присвоюю їх елементам масиву
3. прошу користувача зробити свій вибір елементу
4. перевірка і присвоєння суми
5. запитую у користувача чи продовжуємо
6. якщо так запит на введення 2=го елемента і перевірка
7. якщо ні то виходжу з циклу
8. вивід результату
*/

function getRandomNumbers(num: number, min: number, max: number): number[] {
  let arrayNumbers: number[] = [];
  for (let i = 0; i < num; i++) {
    let randNum = min + Math.floor(Math.random() * (max - min + 1));
    arrayNumbers.push(randNum);
  }
  return arrayNumbers;
}
const minNumber = -500;
const maxNumber = 500;
const numArr = 10;
// const numArr = parseInt(prompt('Введіть число','10')!)

function checkUserChoice(numbers: number[]): number {
  let sum: number = 0;
  let totalSum: number = 0;
  let userChoice: string | null;

  while (true) {
    userChoice = prompt(`Введіть число від 1 до${numArr}`, "5");
    if (userChoice === null) break;
    const userNum = parseInt(userChoice);
    if (userNum >= 1 && userNum <= numbers.length) {
      const index = userNum - 1;
      sum = numbers[index];
      totalSum += sum;
      alert(`Ви ввели ${userNum} - ваш виграш = ${sum} `);
    } else {
      alert(`Не вірне число ${userNum}. Повторіть спробу`);
      continue;
    }

    let userConfirm = confirm(`Продовжуємо гру?`);
    if (userConfirm) {
      continue;
    } else {
      break;
    }
  }

  return totalSum;
}
const getArray = getRandomNumbers(numArr, minNumber, maxNumber);
const result = checkUserChoice(getArray);
alert(`Ваш виграш =  ${result}`);
