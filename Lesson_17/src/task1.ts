// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

class OperationsOnArrays {
  static positiveNumbers: number = 0;
  static negativeNumbers: number = 0;
  static countNumbers: number = 0;
  static searchNumber:number
//   static searchNumber:number|null = null
  constructor(public arrNumbers: number[]) {}
  static getPositiveNumbers(arr: number[]) {
    for (const element of arr) {
      if (element > 0) {
        OperationsOnArrays.positiveNumbers+=1
      }
    }
    return OperationsOnArrays.positiveNumbers
  }
  static getNegativeNumbers(arr:number[]){
    for (const element of arr) {
        if (element<0) {
            OperationsOnArrays.negativeNumbers+=1
        }
    }
    return OperationsOnArrays.negativeNumbers
  }
  static countSomeNumber(arr:number[],searchNumber:number){
    OperationsOnArrays.searchNumber = searchNumber
    for (const element of arr) {
        if (element ===  OperationsOnArrays.searchNumber) {
            OperationsOnArrays.countNumbers+=1
        }
    }
    return OperationsOnArrays.countNumbers
  }
  toString(){
    
    return `кількість додатних чисел = ${OperationsOnArrays.positiveNumbers}<br>кількість від’ємних чисел = ${OperationsOnArrays.negativeNumbers}<br>кількість входжень числа ${OperationsOnArrays.searchNumber}  = ${OperationsOnArrays.countNumbers}`
  }
}
const arr: number[] = [23, -676, -1, 98, 456, 3, -56, 98, 1, 5, 5, 23];
const operations = new OperationsOnArrays(arr);
console.log(OperationsOnArrays.getPositiveNumbers(arr))
console.log(OperationsOnArrays.getNegativeNumbers(arr))
console.log(OperationsOnArrays.countSomeNumber(arr, 5))
document.write(`${operations.toString()}`)