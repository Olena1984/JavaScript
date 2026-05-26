"use strict";
// // Побудова меню сайту
// // Рекурсивно відображати багаторівневі пункти меню.
// // -------
// // Масив меню з вкладеними пунктами
// type MenuItem = {
//   title: string
//   link: string
//   children?: MenuItem[]
// }
// const menuItems = [
//   {
//     title: 'Головна',
//     link: '/',
//   },
//   {
//     title: 'Про нас',
//     link: '/about',
//     children: [
//       { title: 'Команда', link: '/about/team' },
//       { title: 'Історія', link: '/about/history' },
//     ],
//   },
//   {
//     title: 'Послуги',
//     link: '/services',
//     children: [
//       {
//         title: 'Розробка',
//         link: '/services/dev',
//         children: [
//           { title: 'Web', link: '/services/dev/web' },
//           { title: 'Mobile', link: '/services/dev/mobile' },
//         ],
//       },
//       { title: 'Консалтинг', link: '/services/consulting' },
//     ],
//   },
// ]
// function printMenuItems(items: MenuItem[], indent: string): void {
//   for (const item of items) {
//     document.write(`${indent} ${item.title}<br>`)
//     if (item.children)
//         printMenuItems(item.children, indent + '-----')
//   }
// }
// printMenuItems(menuItems, '')
//==============================================
// // Пошук елемента у вкладеному JSON
// // Рекурсивно знаходити ключ у структурі даних.
// // -------
// // Вкладений JSON з різними рівнями
// const data = {
//   id: 1,
//   name: "root",
//   meta: {
//     created: "2026-05-06",
//     tags: ["js", "recursion"],
//     author: {
//       name: "Andrii",
//       contacts: {
//         email: "andrii@example.com",
//         socials: [
//           { type: "twitter", url: "https://twitter.com/andrii" },
//           { type: "github", url: "https://github.com/andrii" }
//         ]
//       }
//     }
//   }
// };
//==============================================
// // Вивід структури організації
// // Керівник → підлеглі → їхні підлеглі.
// // -------
// // Масив співробітників з ієрархією
// type Person = {
//   name: string
//   position: string
//   subordinates: Person[]
// }
// const organization = {
//   name: 'CEO',
//   position: 'Director',
//   subordinates: [
//     {
//       name: 'Іван',
//       position: 'Head of Development',
//       subordinates: [
//         { name: 'Оксана', position: 'Frontend Dev', subordinates: [] },
//         { name: 'Петро', position: 'Backend Dev', subordinates: [] },
//       ],
//     },
//     {
//       name: 'Марія',
//       position: 'Head of Marketing',
//       subordinates: [
//         { name: 'Юлія', position: 'SEO Specialist', subordinates: [] },
//       ],
//     },
//   ],
// }
// function searcHForWorker(
//   currentPerson: Person,
//   searchName: string,
// ): string | undefined {
//   if (currentPerson.name === searchName) return currentPerson.position
//   if (currentPerson.subordinates?.length ?? 0 > 0) {
//     for (const worker of currentPerson.subordinates) {
//       const result = searcHForWorker(worker, searchName)
//       if (result) return result
//     }
//   }
// }
// document.write(
//   `Position : ${searcHForWorker(organization, 'Петро') ?? 'Немає такого '}`,
// )
//==============================================
// // Рекурсивний пошук у графі друзів
// // Знайти друга друга друга…
// // -------
// // Масив користувачів з друзями
// const users = [
//   {
//     id: 1,
//     name: "Андрій",
//     friends: [
//       {
//         id: 2,
//         name: "Іван",
//         friends: [
//           {
//             id: 3,
//             name: "Марія",
//             friends: [
//               { id: 4, name: "Олег", friends: [] }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];
// js
// // Вивід коментарів у блозі
// // Вкладені відповіді на коментарі.
// // -------
// // Масив коментарів з вкладеними відповідями
// const comments = [
//   {
//     id: 1,
//     author: "Андрій",
//     text: "Цікава стаття!",
//     replies: [
//       {
//         id: 2,
//         author: "Іван",
//         text: "Так, мені теж сподобалось.",
//         replies: [
//           {
//             id: 3,
//             author: "Марія",
//             text: "А мені здається, що можна було б додати приклади.",
//             replies: []
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 4,
//     author: "Оксана",
//     text: "Дякую за пояснення!",
//     replies: []
//   }
// ];
//===================================================================
// Побудова меню сайту
// Рекурсивно відображати багаторівневі пункти меню.
// -------
// Пошук елемента у вкладеному JSON
// Рекурсивно знаходити ключ у структурі даних.
// -------
// Вивід структури організації
// Керівник → підлеглі → їхні підлеглі.
// -------
// Рекурсивний пошук у графі друзів
// Знайти друга друга друга…
// -------
// Вивід коментарів у блозі
// Вкладені відповіді на коментарі.
//===================================================================
//===================================================================
//===================================================================
// const ob1 = {
//   a: 11,
//   meth1: function () {
//     const innerFunc = () => {
//       document.write(this)
//       document.write(this.a)
//     }
//     return innerFunc
//   },
// }
// //----
// const f = ob1.meth1()
// f()
// ----------------
// function sum() {
//   return [].reduce.call(arguments, (prevSum, el) => prevSum + el)
// }
// const res = sum(3, 2, 1, 65)
// document.write(res)
// ----------------
// const ob1 = {
//   a: 11,
//   meth1() {
//     // document.write(this)
//     document.write(this.a)
//   },
// }
// const ob2 = {
//   a: 22,
// }
// const f = ob1.meth1.bind(ob1)
// f.call(ob2)
//===================================================================
//===================================================================
//===================================================================
//===================================================================
//===================================================================
//Описати об"єкт час доби. Визначати чи вечір, чи ранок. Дії збільшекння кількості годин на 1 і збільшення кількості хвилин на 1
//===================================================================
// Товари (назва, ціна, кількість). Методи: дати знижку на товар, збільшити кількість товару
//================= за допомогою функцій конструкторів =========================
// //================= за допомогою класів =========================
//===================================================================
//учень
//---- властивості ---
//- ім"я
//- вік
//- оцінки
//------ методи (функ. власт. або ж дії)
// вивести привітання
// вивисти, що це учень
// знайти середній бал
// знайти мінімальну оцінку
//===================================================================
//=====================================================
//       Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у
// іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів.
//=====================================================
// Приклад. Дано функцію без формальних параметрів. Знайти суму усіх аргументів, які буде передано у функцію,
// використатавши reduce стосовно argumnets
//=====================================================
//   Дано об’єкт, що містить масив чисел. Кожну секунду виводити випадкове число з цього масиву
//=====================================================
// Приклад. Розробити клас «Передбачувач». Дозволяє кожні вказані кількість секунд отримувати передбачення
// Властивості :
//      масив можливоих передбачень,
//      інтервал між передбаченнями
// Методи:
//      вибір випадкового передбачення
//      метод run, що ініціює запуск таймера і генерування передбачень
// class Predictor {
// //-------------
// const initialPredictionsList = [
//   'PEACE',
//   'LOVE',
//   'MONEY',
//   'BIG MONEY',
//   'BEER',
//   'Шовдарь',
//   'Пікниця',
// ]
// let superPredictor = new Predictor(initialPredictionsList, 2000)
// superPredictor.run()
//=====================================================
//Приклад. Розробити клас, що приймає масив імен і дозволяє вивести якийсь список з використанням маркованого або нумерованого списку. Передбачити методи фільтрації списку за якимись фрагментом тексту.
//=====================================================
// Дано об’єкт, що містить масив чисел. Кожну секунду виводити випадкове число з цього масиву
//=====================================================
//=====================================================
//=====================================================
//------------------------
// Описати клас подія (назва події (не може бути порожньою), номер дня (має бути робчим днем 1-5))
// class MyEvent {
//   // ---- описуємо типи полів
//   title: string
//   dayNum: number
//   // ---- конструктор для створення об"єктів (треба передати всі необхідні дані)
//   constructor(title: string, dayNum: number) {
//     // ----- описуємо властивості
//     // this = {}
//     this.title = title // {title :'Drink coffee' }
//     this.dayNum = dayNum // {title :'Drink coffee', dayNum:1 }
//     // return this
//   }
//   // ----- описуємо методи
//   moveToOtherDay(otherDay: number) {
//     this.dayNum = otherDay
//   }
//   toString() {
//     return `${this.title} : ${this.dayNum}`
//   }
// }
// // ----
// const ev1 = new MyEvent('Drink coffee', 1)
// ev1.moveToOtherDay(3)
// document.write(` ${ev1}`)
//=====================================================
//=====================================================
//   Дано об’єкт, що містить масив чисел. Кожну секунду виводити випадкове число з цього масиву
// class Notifier {
//   numbers: number[]
//   interval: number
//   intervalId: any
//   constructor(numbers: number[], interval: number) {
//     this.numbers = numbers
//     this.interval = interval
//   }
//   printRandomNumber() {
//     const randIndex = Math.floor(Math.random() * this.numbers.length)
//     document.write(`${this.numbers[randIndex]}<br>`)
//   }
//   start() {
//     document.write('Start<br>')
//     this.intervalId = setInterval(() => {
//       this.printRandomNumber()
//     }, this.interval)
//   }
//   stop() {
//     clearInterval(this.intervalId)
//     document.write('Stop!')
//   }
// }
// //----
// const not1 = new Notifier([11, 55, 77, 99, 33], -1000)
// not1.start()
// setTimeout(() => not1.stop(), 4000)
//=====================================================
//=====================================================
//Приклад. Розробити клас, що приймає масив імен і дозволяє вивести якийсь список з використанням маркованого або нумерованого списку.
//Передбачити методи фільтрації списку за якимись фрагментом тексту.
//----  властивості
// namesList
// listTag
//---  методи
// getFilteredList
// printList
// class ListCreator {
// }
// //---
// let testNamesList = ['Olga', 'Ivan', 'Petro', 'Oksana']
// let list1 = new ListCreator(testNamesList, 'ul')
// list1.printList('pEt')
// let list2 = new ListCreator(['aa', 'bbb', 'tttt', 'qqqq'], 'ol')
// list2.printList()
//=====================================================
//=====================================================
// Задача. Створити клас TTime для роботи із часом у форматі “години:хвилини”. Час представляється структурою із двома полями. Реалізувати методи збільшення/зменшення  часу на певну кількість годин чи хвилин.
//---- Властивості
//  * години
//  * хвилини
//---- Методи (дії, які треба робити)
//   * метод збыльшення годин
//   * метод зменшення годин
//   * метод збыльшення хвилин
//   * метод зменшення хвилин
//======== Для створення якогось об"єкта потрібно знати
// - початкове значення години
// - початкове значення хвилин
//=====================================================
//=====================================================
//       Задача. Розробити клас «Бронювання автомобіля»
// ------  Поля
//Вартість одного дня
//Розмір знижки
// ------- Методи
//Визначення вартості
// render
//=====================================================
//       Приклад. Створити об’єкт учень.
//        ----------- Властивості - характеристики ---------
//        ПІБ (прізвище, ім"я, по-батькові)
//        клас, у якому навчається
//        вік
//        середній бал
//        ------------ Методи (функіональні можливості) -------------
//        визначення того, ким він є (відмінник, хорошист, ...)
//        визначити кількості років до закінчення школи
// class Pupil {
//   name: string
//   #class: number = 0
//   #age: number = 0
//   #score: number = 0
//   constructor(name: string, class_: number, age: number, score: number) {
//     this.name = name
//     this.Class = class_
//     this.Age = age
//     this.Score = score
//   }
//   // -- Class - property
//   get Class() {
//     return this.#class
//   }
//   set Class(newClass: number) {
//     if (newClass >= 12 || newClass < 1) throw new Error('Class is incorrect!')
//     this.#class = newClass
//   }
//   // ---- Age  - property
//   get Age() {
//     return this.#age
//   }
//   set Age(newAge: number) {
//     if (newAge < 7) throw new Error('Age is incorrect!')
//     this.#age = newAge
//   }
//   //   --- Score  - property
//   get Score() {
//     return this.#score
//   }
//   set Score(newScore: number) {
//     if (newScore < 0 || newScore > 12) throw new Error('Score error!')
//     this.#score = newScore
//   }
//   // ---
//   toString() {
//     return `${this.name} : Age: ${this.Age},  class: ${this.Class}, score:${this.Score}`
//   }
// }
// // -------
// try {
//   const p1 = new Pupil('Ivan', 6, 12, 10)
//   p1.Age = 15
//   document.write(`Age : ${p1.Age}`)
//   document.write(`${p1}`)
// } catch (error) {
//   console.log(error)
// }
//=====================================================
// class Test {
//   constructor(
//     public a: number,
//     private b: number,
//   ) {}
//   toString() {
//     return `a=${this.a},  b=${this.b}`
//   }
// }
// // ---
// const t1 = new Test(11, 22)
// document.write(`${t1}`)
//=====================================================
//=====================================================
//       Приклад. Створити клас «Клієнт»
// (ім’я – довільний доступ (відкрите поле),
// номер рахунку – тільки для читання,
// кількість грошей – контрольований доступ (і читання і запис))
//=====================================================
//       Задача 2. Створити клас Product, що представляє товар на складі
// поля:
// 	Назва товару
// 	Кількість одиниць
// 	Ціна одиниці
// методи:
// 	зменшення кількості товару
// 	збільшення кількості товару
// 	визначення вартості вказаної кількості товару
// 	нарахування вказаної знижки (у відсотках)
// 	визначення загальної вартості товару
//=====================================================
// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

class TMoney {
  #exchangeRate;
  #sumDollars;
  constructor(exchangeRate, sumDollars = 0) {
    this.ExchangeRate = exchangeRate;
    this.SumDollars = sumDollars;
  }
  get ExchangeRate() {
    return this.#exchangeRate;
  }
  set ExchangeRate(newExchangeRate) {
    this.#exchangeRate = newExchangeRate;
  }
  get SumDollars() {
    return this.#sumDollars;
  }
  set SumDollars(newSum) {
    this.#sumDollars = newSum;
  }
  addMoney(money) {
    const convertGrnToDollars = Math.floor(money / this.ExchangeRate);
    if (convertGrnToDollars < 0) {
      throw new Error("Incorrect money");
    } else {
      this.SumDollars += convertGrnToDollars;
    }
    return this.SumDollars;
  }
  revoveMoney(money) {
    const convertGrnToDollars = Math.floor(money / this.ExchangeRate);
    if (this.SumDollars < convertGrnToDollars) {
      throw new Error("can't get money");
    } else {
      this.SumDollars -= convertGrnToDollars;
    }
    return this.SumDollars;
  }
  determinationRate(incrementMoney) {
    if ((this.SumDollars <= 0)) {
      throw new Error("Sum less 0");
    }
    const newSumGrn = this.SumDollars * this.ExchangeRate + incrementMoney;
    const newRate = newSumGrn / this.SumDollars;
    return newRate;
  }
}
const rate = 45;
const money = 120;
const moneyRemove = 10;
const incrementMoney = 100;
const resMoney = new TMoney(rate);
console.log(resMoney.ExchangeRate);
console.log(resMoney.addMoney(money));
console.log(resMoney.revoveMoney(moneyRemove));
console.log(resMoney.determinationRate(incrementMoney));

//=====================================================
//=====================================================
//       Автомобіль
// Клас із полями #speed і #fuel. Швидкість можна змінювати, лише якщо є пальне.

class Auto {
  #speed = 0;
  #fuel = 0;
  constructor(speed, fuel) {
    this.Fuel = fuel;
    this.Speed = speed;
    // в даному прикладі порядок полів конструктора має значення коли у сеттері робимо перевірку. Спершу перевіряємо пальне, а потім присоюємо швидкість
  }
  get Fuel() {
    return this.#fuel;
  }
  set Fuel(newFuel) {
    this.#fuel = newFuel;
  }
  get Speed() {
    return this.#speed;
  }
  set Speed(newSpeed) {
    if (this.Fuel <= 0) {
      throw new Error("Fuel is not enough");
    } else {
      this.#speed = newSpeed;
    }
    // варіант з винесенням логіки окремо викликаємо перевірку всередині сеттера
    //  this.checkFuel()
    // this.#speed = newSpeed;
  }
  // checkFuel(newFuel){
  //   if (this.Fuel <= 0) {
  //     throw new Error("Fuel is not enough");
  //   }
  // }
  toString() {
    return `Кількість пального ${this.Fuel}, дозволена така швидкість -  ${this.Speed} `;
  }
}
const newFuel = 120;
const newSpeed = 100;
const resAuto = new Auto(newSpeed, newFuel);

// console.log(resAuto.Speed);
// console.log(resAuto.Fuel);
// document.write(` ${resAuto.toString()}`);

//=====================================================
//       Сейф
// Клас із полями #code і #money. Дозвольте знімати гроші, лише якщо код правильний.

// class Safebox {
//   #code = 3345;
//   #money = 3000;
//   constructor(amount) {
//     this.amount = amount;
//   }
//   get Code() {
//     return this.#code;
//   }
//   set Code(newCode) {
//     this.#code = newCode;
//   }
//   get Money() {
//     return this.#money;
//   }
//   set Money(newMoney){
//     this.#money = newMoney
//   }
//   withdraw(amount) {
//     const userCode = parseInt(prompt("Enter yuor code", ""));
//     if (userCode === this.Code && this.amount <= this.Money) {
//         this.#money = this.Money - this.amount
//     }else{
//         throw new Error("incorrect code");
//     }
//     return this.#money
//   }
//   toString() {
//     return `Вам погоджено таку суму ${this.amount}<br>На залишку ${this.Money}`;
//   }
// }
// const agreedAmount = 200;

// const money = new Safebox(agreedAmount);
// console.log(money.Money);
// console.log(money.Code);
// console.log(money.withdraw());

// document.write(` ${money.toString()}`);

//=====================================================
//       Іграшка
// Клас із полями #battery і #name. Дозвольте змінювати назву лише при заряді > 70%.

// class Toy {
//   #battery = 0;
//   #name = 'no';
//   constructor(battery, name) {
//     this.Battery = battery;
//     this.Name = name;
//   }
//   get Battery(){
//     return this.#battery
//   }
//   set Battery(newCharge){
//     if (newCharge>this.#battery) {
//         this.#battery = newCharge
//     }
//   }
//   get Name() {
//     return this.#name;
//   }
//   set Name(newName) {
//     if (this.Battery > 70) {
//       this.#name = newName;
//     }
//   }
//   toString() {
//     return `${this.Battery}% = ${this.Name}`;
//   }
// }
// const res = new Toy(80, 'yes');
// console.log(res.toString());
// document.write(` ${res}`);
//=====================================================
//       Рюкзак
// Клас із полями #weight і #items. Дозвольте додавати предмети, якщо вага не перевищує 10 кг.

// class Backpack {
//   #weight = 0;
//   #items = [];
//   #checkingWeight = 10;
//   constructor(weight,  checkingWeight) {
//     this.Weight = weight;
//     this.CheckingWeight = checkingWeight;
//   }

//   get Weight() {
//     return this.#weight;
//   }
//   set Weight(newWeight) {
//     if (newWeight > this.#weight) {
//       this.#weight = newWeight;
//     }
//   }
//   get Items() {
//     return this.#items;
//   }
//   get CheckingWeight() {
//     return this.#checkingWeight;
//   }
//   set CheckingWeight(newWeight) {
//     if (newWeight <= this.CheckingWeight) this.#checkingWeight = newWeight;
//   }
//   set Items(newItem) {
//     if (this.Weight <= this.CheckingWeight) {
//       this.#items.push(newItem);
//     }
//   }
//   toString() {
//     return `${this.#items.join(", ")}`;
//   }
// }
// const items = ["pen", "book", "notebook", "rule", "bottle"];
// const weight = [5, 9, 10, 2, 20];
// // -------------------------------------
// const res = new Backpack(items);

// for (let i = 0; i < weight.length; i++) {
//   if (res.Weight + weight[i] <= res.CheckingWeight) {
//     res.Weight = weight[i]+res.Weight
//     res.Items = items[i];
//   }
// }
// document.write(`${res}<br>`);
// console.log(res);

// --------------------------------------------------

//=====================================================
//       Магазин
// Клас із полями #stock (масив з товарами (назва, кількість)) і #revenue. Дозвольте продавати товар, якщо є запас.

// class Shop {
//   #stock = [
//     {
//       name: "top",
//       quantity: 10,
//       price: 50,
//     },
//     {
//       name: "skirt",
//       quantity: 30,
//       price: 200,
//     },
//     {
//       name: "jacket",
//       quantity: 5,
//       price: 500,
//     },
//     {
//       name: "shorts",
//       quantity: 50,
//       price: 700,
//     },
//   ];
//   #revenue = 0;
//   constructor(stock, revenue) {;
//   }
//   get Stock() {
//     return this.#stock;
//   }
//   sell(name) {
//     const nameProduct = this.Stock.find((element) => element.name === name);
//     if(!nameProduct) {
//       throw new Error("Товар відсутній");
//     }else if(nameProduct.quantity<=0) {
//       throw new Error("Кільксть товару = 0.");
//     }
//     else {
//       nameProduct.quantity -= 1;
//       this.Revenue = this.Revenue + nameProduct.price;
//     }
//     return nameProduct
//   }
//   get Revenue() {
//     return this.#revenue;
//   }
//   set Revenue(newRevenue) {
//     this.#revenue = newRevenue;
//   }
// }
// const shop = new Shop();

// console.log(shop.Stock);

// console.log(shop.sell("top"));
// console.log(shop.sell("skirt"));
// console.log(shop.sell("shorts"));
// console.log(shop.sell("top"));

// console.log(shop.Revenue);
// try {
//   console.log(shop.sell("jeans"));
// } catch (error) {
//   console.log(error);
// }

//=====================================================
//       Піцерія
// Клас із полями #ingredients і #orders. Замовлення можливі, якщо є інгредієнти.

// class Pizzeria {
//   #ingredients;
//   #orders;
//   constructor(ingredients = [], orders = 0) {
//     this.Ingredients = ingredients;
//     this.Orders = orders;
//   }
//   get Ingredients() {
//     return this.#ingredients;
//   }
//   set Ingredients(newIngredients) {
//     this.#ingredients = newIngredients;
//   }
//   get Orders() {
//     return this.#orders;
//   }
//   set Orders(newOrder) {
//     this.#orders = newOrder;
//   }
//   order(name) {
//     const checkIngredient = this.Ingredients.find(
//       (element) => element.name === name,
//     );
//     if (!checkIngredient) {
//       throw new Error("Incorrect ingtidients");
//     } else if (checkIngredient.quantity <= 0) {
//       throw new Error("Error!quantity =0");
//     } else {
//       checkIngredient.quantity -= 1;
//       this.Orders = this.Orders + 1;
//     }
//     return checkIngredient;
//   }
//   toString() {
//     const newList = this.Ingredients.map(element => `${element.name}: ${element.quantity}`).join('<br>')
//     return `кількість замовлень =  ${this.Orders}<br> Залишок інгрідієнтів: ${newList}`;
//   }
// }

// const ingredientsList = [
//   {
//     name: "tomato",
//     quantity: 30,
//   },
//   {
//     name: "lettuce",
//     quantity: 20,
//   },
//   {
//     name: "mozzarella",
//     quantity: 10,
//   },
//   {
//     name: "salami",
//     quantity: 20,
//   },
// ];
// const order = new Pizzeria(ingredientsList);
// console.log(order.Ingredients);

// console.log(order.order("tomato"));
// console.log(order.order("mozzarella"));
// console.log(order.order("mozzarella"));
// console.log(order.order("mozzarella"));
// console.log(order.order("mozzarella"));
// console.log(order.order("mozzarella"));
// console.log(order.order("lettuce"));

// console.log(order.Orders);
// document.write(`${order.toString()}`);

//=====================================================
//       Бібліотека
// Клас із полями #books і #visitors. Дозвольте видавати книги відвідувачам.

// class Library {
//   #books = [];
//   #visitors = 0;
//   #issuedBooks = [];
//   constructor(books, visitors, issuedBooks) {
//     this.Books = books;
//     this.Visitors = visitors;
//     this.IssuedBooks = issuedBooks;
//   }
//   get Books() {
//     return this.#books;
//   }
//   set Books(newList) {
//     this.#books = newList;
//   }
//   get Visitors() {
//     return this.#visitors;
//   }
//   set Visitors(newVisitors) {
//     this.#visitors = newVisitors;
//   }
//   get IssuedBooks() {
//     return this.#issuedBooks;
//   }
//   set IssuedBooks(newBooks) {
//     this.#issuedBooks = newBooks;
//   }
//   book(title) {
//     // const copy = JSON.parse (JSON.stringify(this.Books))
//     const book = this.Books.find((element) => element.title === title);

//     if (!book) {
//       throw new Error("Такої книги не має");
//     } else if (book.quantity <= 0) {
//       throw new Error("Кількість книг менша 0");
//     } else {
//       const copy = JSON.parse(JSON.stringify(book));
//       book.quantity -= 1;
//       this.IssuedBooks.push(copy);
//       this.Visitors = this.Visitors + 1;
//     }
//     return book;
//   }
//   toString() {
//     const newBooksList = this.Books.map(
//       (element) => `${element.title}: ${element.quantity}`,
//     ).join("<br>");
//     const bookGet = this.IssuedBooks.map((element) => `${element.title}`).join(
//       "<br>",
//     );
//     return `Кількість відвідувачів =  ${this.Visitors}.<br> Книги що взяли відвідувачі:<br> ${bookGet}<br> Залишилося стільки книг:<br>${newBooksList}`;
//   }
// }

// const booksList = [
//   {
//     title: "Kobzar",
//     quantity: 10,
//   },
//   {
//     title: "Chocolate",
//     quantity: 1,
//   },
//   {
//     title: "Cafe",
//     quantity: 3,
//   },
//   {
//     title: "Dog Money",
//     quantity: 2,
//   },
//   {
//     title: "Book lovers",
//     quantity: 5,
//   },
// ];

// const library = new Library(booksList, 0, []);
// console.log(library.Books);
// console.log(library.book("Kobzar"));
// console.log(library.book("Kobzar"));
// console.log(library.book("Kobzar"));
// console.log(library.book("Kobzar"));
// console.log(library.IssuedBooks);
// document.write(` ${library.toString()}`);

//=====================================================
//=====================================================
