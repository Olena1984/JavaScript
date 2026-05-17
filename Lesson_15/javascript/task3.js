"use strict";
/* Створити об’єкт «Авто».
Поля(властивості)
Марка
Розмір бака
Кількість наявних літрів
Кількість місць
Кількість пасажирів
Методи (дії)
Заправка на вказану кількість літрів
Виведення кількості пасажирів
Додавання пасажирів
Висадка пасажирів */
const auto = {
    brand: "BMW",
    tankSize: 52,
    availableFuel: 40,
    numberPlaces: 5,
    numberPassengers: 4,
    refuelingCar(fuelLitres) {
        if (this.availableFuel + fuelLitres > this.tankSize) {
            const allowableFuel = this.tankSize - this.availableFuel;
            return `Бак не вмістить ${fuelLitres} л. пального. Ви можете заправити лише ${allowableFuel} л.`;
        }
        else {
            this.availableFuel += fuelLitres;
            return `Заправка на ${fuelLitres} л, в баку = ${this.availableFuel} л. пального `;
        }
    },
    passengersNumber() {
        return this.numberPassengers;
    },
    addPassengers(addPassenger) {
        const allowablePeople = this.numberPlaces - this.numberPassengers;
        const newPassengers = this.numberPassengers + addPassenger;
        if (newPassengers > this.numberPlaces) {
            return `У вас вже є ${this.numberPassengers} пасажири. Ви не можете ще взяти ${addPassenger} пасажирів, це перевищує допустиму норму ${this.numberPlaces} місць. Ви можете взяти лише ${allowablePeople}.`;
        }
        else {
            this.numberPassengers += addPassenger;
            return `Кількість пасажирів в авто = ${this.numberPassengers}`;
        }
    },
    removePassengers(removePassenger) {
        if (this.numberPassengers < removePassenger) {
            throw new Error(`Помилка - ви не можете висадити більше пасажирів ніж є у авто`);
        }
        else {
            this.numberPassengers -= removePassenger;
            return `Кількість пасажирів що залишилися =  ${this.numberPassengers}. Вийшло ${removePassenger} пасажирів `;
        }
    },
};
// ======class==========
// class Auto {
//   brand: string;
//   tankSize: number;
//   availableFuel: number;
//   numberPlaces: number;
//   numberPassengers: number;
//   constructor(
//     brand: string,
//     tankSize: number,
//     availableFuel: number,
//     numberPlaces: number,
//     numberPassengers: number,
//   ) {
//     this.brand = brand;
//     this.tankSize = tankSize;
//     this.availableFuel = availableFuel;
//     this.numberPlaces = numberPlaces;
//     this.numberPassengers = numberPassengers;
//   }
//   // Заправка на вказану кількість літрів
//   refuelingCar(fuelLitres: number) {
//     if (this.availableFuel + fuelLitres > this.tankSize) {
//       const allowableFuel = this.tankSize - this.availableFuel;
//       return `Бак не вмістить ${fuelLitres} л. пального. Ви можете заправити лише ${allowableFuel} л.`;
//     } else {
//        this.availableFuel += fuelLitres;
//       return `Заправка на ${fuelLitres} л, в баку = ${this.availableFuel} л. пального `;
//     }
//   }
//   // Виведення кількості пасажирів
//   passengersNumber() {
//     return this.numberPassengers;
//   }
//   // Додавання пасажирів
//   addPassengers(addPassenger: number) {
//     const allowablePeople: number = this.numberPlaces - this.numberPassengers;
//     const newPassengers = this.numberPassengers + addPassenger;
//     if (newPassengers > this.numberPlaces ) {
//       return `У вас вже є ${this.numberPassengers} пасажири. Ви не можете ще взяти ${addPassenger} пасажирів, це перевищує допустиму норму ${this.numberPlaces} місць. Ви можете взяти лише ${allowablePeople}.`
//     } else {
//       this.numberPassengers += addPassenger;
//       return `Кількість пасажирів в авто = ${this.numberPassengers}`;
//     }
//   }
//   // Висадка пасажирів
//   removePassengers(removePassenger: number) {
//     if (this.numberPassengers < removePassenger) {
//       throw new Error(
//         `Помилка - ви не можете висадити більше пасажирів ніж є у авто`,
//       );
//     } else {
//       this.numberPassengers -= removePassenger
//       return `Кількість пасажирів що залишилися =  ${this.numberPassengers}. Вийшло ${removePassenger} пасажирів `;
//     }
//   }
// }
const fuelLitres = 5;
const addPassenger = 1;
const removePassenger = 3;
// ============== вівід результатів об'єкта===============
console.log(auto.refuelingCar(fuelLitres));
console.log(auto.passengersNumber());
console.log(auto.addPassengers(addPassenger));
console.log(auto.removePassengers(removePassenger));
// ========вивід результатів класу==========
// const result = new Auto("BMW", 52, 40, 5, 4);
// console.log(result.refuelingCar(fuelLitres));
// console.log(result.passengersNumber());
// console.log(result.addPassengers(addPassenger));
// console.log(result.removePassengers(removePassenger));
//# sourceMappingURL=task3.js.map