/* 
Розробити клас MultiChecker для перевірки таблиці множення
-----------------------------------
Поля
Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
Кількість правильних відповідей
Кількість неправильних відповідей
--------------------------------------
Методи
Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
Перевірка правильності вказаної відповіді
render - виведення інформації про тестування на екран
*/

class MultiChecker {
  number: number;
  correctAnswers: number;
  incorrectAnswers: number;
  randNum: number;
  constructor(
    number: number,
    correctAnswers: number,
    incorrectAnswers: number,
    randNum: number,
  ) {
    ((this.number = number),
      (this.correctAnswers = correctAnswers),
      (this.incorrectAnswers = incorrectAnswers),
      (this.randNum = randNum));
  }
  //   Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
  getRandomNumber(min: number, max: number) {
    this.randNum = Math.floor(min + Math.random() * (max - min + 1));
    console.log(this.randNum);

    return this.randNum;
  }
  // Перевірка правильності вказаної відповіді
  checkAnswer() {
    const correctRes = this.number * this.randNum;
    console.log(this.randNum);
    
    const userAnswer = parseInt(
      prompt(`${this.number} * ${this.randNum} = ?`, "")!,
    );
    if (userAnswer === correctRes) {
      return ++this.correctAnswers;
    } else {
      return ++this.incorrectAnswers;
    }
  }
  // render - виведення інформації про тестування на екран
  render() {
    return `Кількість правильних відповідей = ${this.correctAnswers}, неправильних = ${this.incorrectAnswers}`;
  }
}
const min: number = 1;
const max: number = 9;
const correctAnw: number = 0;
const incorrectAnw: number = 0;
const number: number = 7;
const multiCheckerRes = new MultiChecker(number, correctAnw, incorrectAnw, 0);
// console.log(multiCheckerRes.getRandomNumber(min, max));
// console.log(multiCheckerRes.checkAnswer());

for (let i = 0; i < 8; i++) {
    multiCheckerRes.getRandomNumber(min, max)
    multiCheckerRes.checkAnswer()
}
document.write(`${multiCheckerRes.render()}`);