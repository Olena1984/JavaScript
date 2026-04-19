/* Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі. */

/* 
 1. ввести кількість клітинок масиву
 2. ввести кількість кораблів
 3. рандомно розмістити кораблі
 4. запит користувача на номер клітинки
 5.перевірка і вивід результату
 */

const cellsOfArray = parseInt(
  prompt("Введіть кількість клітинок масиву", "10")!,
);
const shipsForGame = parseInt(
  prompt("Введіть кількість кораблів для гри", "5")!,
);

// Створюю поле для гри
function createFieldForGame(cells: number, ships: number): number[] {
  let gameArray: number[] = [];
  for (let i = 0; i < cells; i++) {
    gameArray.push(0);
  }
  while (ships) {
    let randSequence = Math.floor(Math.random() * gameArray.length);
    if (gameArray[randSequence] === 0) {
      gameArray[randSequence] = 1;
      ships--;
    }
  }
  return gameArray;
}
// функція створення гри 
function gameSeaBattle(fieldGame: number[], ships: number):string {
  let successAttempts: number = 0;
  let failedAttempts:number = 0
  while (successAttempts < ships) {
    const userChoice = parseInt(prompt("Введіть номер поля", "1")!);
    // Коригування введеного користувачем числа. Якщо користувач ввів 1 то порівняння буде з індексом масиву 0. Тому (1-1), щоб вибір співпав з індексом масиву.
    const correctedIndex = userChoice-1  
      if (fieldGame[correctedIndex] === 1) {
        successAttempts ++;
        fieldGame[correctedIndex] = 0;
        alert(`Влучив! Мінус 1 корабель`);
      } else {
        failedAttempts++
        alert(`Постріл мимо, спробуйте ще раз`);
      }
  }
  return `Вітаю ви потопили усі кораблі.Вдалі спроби спроб = ${successAttempts}, а невдалі = ${failedAttempts}`;
}

// вивід результату
const gameField = createFieldForGame(cellsOfArray, shipsForGame);
const gameResult = gameSeaBattle(gameField, shipsForGame);
alert(gameResult);

