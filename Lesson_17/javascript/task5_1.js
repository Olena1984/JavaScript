"use strict";
// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.
class RandomNumbers {
    minNumber;
    maxNumber;
    constructor(minNumber, maxNumber) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
    }
    getRandomNumber() {
        return Math.floor(this.minNumber + Math.random() * (this.maxNumber - this.minNumber + 1));
    }
}
class Multi_Checker {
    min;
    max;
    randNumber;
    num1 = 0;
    num2 = 0;
    correctAnswer = 0;
    operation = "*";
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.randNumber = new RandomNumbers(this.min, this.max);
    }
    getNumber1() {
        this.num1 = this.randNumber.getRandomNumber();
        return this.num1;
    }
    getNumber2() {
        this.num2 = this.randNumber.getRandomNumber();
        return this.num2;
    }
    getMultiply() {
        this.correctAnswer = this.num1 * this.num2;
        return this.correctAnswer;
    }
    toString() {
        return `firstNum: ${this.num1}, secondNum: ${this.num2}, operation: '${this.operation}', correctAnswer: ${this.correctAnswer}`;
    }
}
const multiRes = new Multi_Checker(1, 9);
// console.log(multiRes.getNumber1());
// console.log(multiRes.getNumber2());
// console.log(multiRes.getMultiply());
// console.log(multiRes.toString());
// document.write(`<p> ${multiRes.toString()}<br></p>`);
class Add_Checker {
    number1;
    number2;
    num1 = 0;
    num2 = 0;
    correctAnswer = 0;
    operation = "+";
    randNumber;
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
        this.randNumber = new RandomNumbers(number1, number2);
    }
    getNum1() {
        this.num1 = this.randNumber.getRandomNumber();
        return this.num1;
    }
    getNum2() {
        this.num2 = this.randNumber.getRandomNumber();
        return this.num2;
    }
    getSum() {
        this.correctAnswer = this.num1 + this.num2;
        return this.correctAnswer;
    }
    toString() {
        return `firstNum: ${this.num1}, secondNum: ${this.num2}, operation: '${this.operation}', correctAnswer: ${this.correctAnswer}`;
    }
}
const addSum = new Add_Checker(1, 100);
// console.log(addSum.getNum1());
// console.log(addSum.getNum2());
// console.log(addSum.getSum());
// document.write(`<p><br> ${addSum.toString()}</p>`);
class History_Test {
    testsList = [];
    constructor() { }
    addTestsList(test) {
        this.testsList.push(test);
    }
}
class TestData {
    firstNum;
    secondNum;
    operation;
    userAnswer;
    correctAnswer;
    constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.operation = operation;
        this.userAnswer = userAnswer;
        this.correctAnswer = correctAnswer;
    }
    toString() {
        return `firstNum:${this.firstNum}, secondNum: ${this.secondNum}, operation: ${this.operation}, userAnswer: ${this.userAnswer}, correctAnswer: ${this.correctAnswer}`;
    }
}
class TestingManager {
    timerSec;
    numTasks;
    multiChecker;
    addChecker;
    static testingManager;
    history = new History_Test();
    userAnswer = 0;
    constructor(timerSec, numTasks, multiChecker, addChecker) {
        this.timerSec = timerSec;
        this.numTasks = numTasks;
        this.multiChecker = multiChecker;
        this.addChecker = addChecker;
        if (TestingManager.testingManager)
            return TestingManager.testingManager;
        TestingManager.testingManager = this;
    }
    getSurvey() {
        const randTask = Math.random();
        if (randTask > 0.5) {
            this.multiChecker.getNumber1();
            this.multiChecker.getNumber2();
            this.multiChecker.getMultiply();
            this.userAnswer = parseInt(prompt(`${this.multiChecker.num1} * ${this.multiChecker.num2} = `, "0"));
            const testList = new TestData(this.multiChecker.num1, this.multiChecker.num2, this.multiChecker.operation, this.userAnswer, this.multiChecker.correctAnswer);
            this.history.addTestsList(testList);
        }
        else {
            this.addChecker.getNum1();
            this.addChecker.getNum2();
            this.addChecker.getSum();
            this.userAnswer = parseInt(prompt(`${this.addChecker.num1} + ${this.addChecker.num2} = `, "0"));
            const testList = new TestData(this.addChecker.num1, this.addChecker.num2, this.addChecker.operation, this.userAnswer, this.addChecker.correctAnswer);
            this.history.addTestsList(testList);
        }
    }
    getNTasks() {
        let counter = 0;
        let interval = setInterval(() => {
            this.getSurvey();
            counter += 1;
            if (this.numTasks === counter) {
                clearInterval(interval);
                document.write(`${this.toString()}`);
            }
        }, this.timerSec);
    }
    toString() {
        const copy = JSON.parse(JSON.stringify(this.history.testsList));
        return copy
            .map((element) => `firstNum: ${element.firstNum}, secondNum:${element.secondNum}, operation:'${element.operation}', userAnswer:${element.userAnswer}, correctAnswer: ${element.correctAnswer}`)
            .join("<br>");
    }
}
const testManager = new TestingManager(500, 5, multiRes, addSum);
const testManager1 = new TestingManager(900, 10, multiRes, addSum);
console.log(testManager === testManager1);
console.log(testManager.getNTasks());
document.write(`<p> ${testManager.toString()}</p>`);
//# sourceMappingURL=task5_1.js.map