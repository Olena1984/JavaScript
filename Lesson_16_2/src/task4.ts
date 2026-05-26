//  Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.

class TDate {
  #initialDate: Date;
  constructor(initialDate: Date = new Date()) {
    this.#initialDate = initialDate;
  }
  get InitialDate() {
    return this.#initialDate;
  }
  addDays(days: number) {
    this.InitialDate.setDate(this.InitialDate.getDate() + days);
    return this.InitialDate;
  }
  removeDays(days: number) {
    this.InitialDate.setDate(this.InitialDate.getDate() - days);
    return this.InitialDate;
  }
  addMonths(months: number) {
    this.InitialDate.setMonth(this.InitialDate.getMonth() + months);
    return this.InitialDate;
  }
  removeMonths(months: number) {
    this.InitialDate.setMonth(this.InitialDate.getMonth() - months);
    return this.InitialDate;
  }
  addYears(years: number) {
    this.InitialDate.setFullYear(this.InitialDate.getFullYear() + years);
    return this.InitialDate;
  }
  removeYears(years: number) {
    this.InitialDate.setFullYear(this.InitialDate.getFullYear() - years);
    return this.InitialDate;
  }
  toString() {
    return `${this.InitialDate.getDate()}.${this.InitialDate.getMonth() + 1}.${this.InitialDate.getFullYear()}`;
  }
}
const currentDate: Date = new Date();
const date =new TDate(currentDate);
console.log(date.InitialDate.toLocaleDateString());
// console.log(date.addDays(40));
// console.log(date.removeDays(80));
// console.log(date.addMonths(10));
// console.log(date.removeMonths(10));
// console.log(date.addYears(9));
// console.log(date.removeYears(9));
date.addDays(40)
// date.removeDays(80)
// date.addYears(9)
// date.removeYears(10)
// date.addMonths(10);
// date.removeMonths(10)
document.write(`${date.toString()}`);
