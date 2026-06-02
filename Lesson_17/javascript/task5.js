"use strict";
// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.
class RandNumbers {
    numMin;
    numMax;
    constructor(numMin, numMax) {
        this.numMin = numMin;
        this.numMax = numMax;
    }
    getRandNum() {
        return Math.floor(this.numMin + Math.random() * (this.numMax - this.numMin + 1));
    }
}
class MultiChecker {
    numMin;
    numMax;
    num1 = 0;
    num2 = 0;
    operation = "*";
    correctAnswer = 0;
    randNum;
    constructor(numMin, numMax) {
        this.numMin = numMin;
        this.numMax = numMax;
        this.randNum = new RandNumbers(numMin, numMax);
    }
    getRandNum() {
        return Math.floor(this.numMin + Math.random() * (this.numMax - this.numMin + 1));
    }
    getNum1() {
        this.num1 = this.randNum.getRandNum();
        return this.num1;
    }
    getNum2() {
        this.num2 = this.randNum.getRandNum();
        return this.num2;
    }
    getProduct() {
        this.correctAnswer = this.num1 * this.num2;
        return this.correctAnswer;
    }
    toString() {
        return `firstNum:${this.num1}, secondNum:${this.num2}, opration:'${this.operation}', correctAnswer:${this.correctAnswer} `;
    }
}
const product = new MultiChecker(1, 9);
// console.log(product.getNum1());
// console.log(product.getNum2());
// console.log(product.getProduct());
// document.write(` ${product.toString()}`);
class AddChecker {
    numMin;
    numMax;
    num1 = 0;
    num2 = 0;
    operation = "+";
    correctAnswer = 0;
    randNum;
    constructor(numMin, numMax) {
        this.numMin = numMin;
        this.numMax = numMax;
        this.randNum = new RandNumbers(numMin, numMax);
    }
    getRandNum() {
        return Math.floor(this.numMin + Math.random() * (this.numMax - this.numMin + 1));
    }
    getNum1() {
        this.num1 = this.randNum.getRandNum();
        return this.num1;
    }
    getNum2() {
        this.num2 = this.randNum.getRandNum();
        return this.num2;
    }
    getSum() {
        this.correctAnswer = this.num1 + this.num2;
        return this.correctAnswer;
    }
    toString() {
        return `firstNum:${this.num1}, secondNum:${this.num2}, opration:'${this.operation}', correctAnswer:${this.correctAnswer} `;
    }
}
const sum = new AddChecker(10, 200);
// console.log(sum.getNum1());
// console.log(sum.getNum2());
// console.log(sum.getSum());
// document.write(`<br> ${sum.toString()}`);
class HistoryTest {
    testList = [];
    constructor() { }
    addTest(test) {
        this.testList.push(test);
    }
}
class TestManager {
    multiply;
    adding;
    timer;
    countTasks;
    history = new HistoryTest();
    static manager;
    constructor(multiply, adding, timer, countTasks) {
        this.multiply = multiply;
        this.adding = adding;
        this.timer = timer;
        this.countTasks = countTasks;
        if (TestManager.manager)
            return TestManager.manager;
        TestManager.manager = this;
    }
    generateTask() {
        const randIndTask = Math.random();
        if (randIndTask > 0.5) {
            this.adding.getNum1();
            this.adding.getNum2();
            this.adding.getSum();
            const userAnswer = parseInt(prompt(`${this.adding.num1}+${this.adding.num2} = `, '0'));
            // if (userAnswer === this.adding.correctAnswer) {
            const resAdding = {
                firstNum: this.adding.num1,
                secondNum: this.adding.num2,
                operation: this.adding.operation,
                userAnswer: userAnswer,
                correctAnswer: this.adding.correctAnswer
            };
            this.history.addTest(resAdding);
            //     alert (`Вірно`)}
            // else alert (`Помилка`)
        }
        if (randIndTask < 0.5) {
            this.multiply.getNum1();
            this.multiply.getNum2();
            this.multiply.getProduct();
            const userAnswer = parseInt(prompt(`${this.multiply.num1}*${this.multiply.num2} = `, '0'));
            // if (userAnswer === this.multiply.correctAnswer) {
            const resMultiply = {
                firstNum: this.multiply.num1,
                secondNum: this.multiply.num2,
                operation: this.multiply.operation,
                userAnswer: userAnswer,
                correctAnswer: this.multiply.correctAnswer
            };
            this.history.addTest(resMultiply);
            //     alert (`Вірно`)}
            // else alert (`Помилка`)
        }
    }
    tasks() {
        for (let i = 0; i < this.countTasks; i++) {
            this.generateTask();
        }
        console.log(this.history.testList);
    }
    toString18() {
        return this.history.testList.map(element => `firstNum ${element.firstNum}, secondNum${element.secondNum}, operation${element.operation}, userAnswer ${element.userAnswer} correctAnswer ${element.correctAnswer}`).join('<br>');
    }
}
const manager = new TestManager(product, sum, 2000, 3);
const manager2 = new TestManager(product, sum, 5000, 13);
console.log(manager === manager2);
console.log(manager.tasks());
document.write(` ${manager.toString()}`);
//# sourceMappingURL=task5.js.map