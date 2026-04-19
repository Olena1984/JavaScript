"use strict";
// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)

let securitiesArr = Array.from({ length: 25 }, () => Math.floor(1 + Math.random() * (10000 - 1 + 1)));
console.log(securitiesArr);
// =============================================================================
//1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
let newArrMore1000 = securitiesArr.filter((number) => number > 1000);
console.log(newArrMore1000);
// ==============================================================================
//2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
// 1-й  варіант map+filter
let indexArr = securitiesArr.map((number, index) => number > 1000 ? index : null).filter(index => index !== null);
// 2-й спосіб reduce
// let indexArr = securitiesArr.reduce(
//   (previousIndex: number[], number, index) => {
//     if (number > 1000) {
//       previousIndex.push(index);
//     }
//     return previousIndex;
//   },
//   [],
// );
console.log(indexArr);
// ===========================================================================
//3)Сформувати список з тих цін, які більші за попереднє значення
// reduce
let listArrMorePrev = securitiesArr.reduce((initialValue, currentNumber, index, array) => {
    if (currentNumber > array[index - 1]) {
        initialValue.push(currentNumber);
    }
    return initialValue;
}, []);
console.log(listArrMorePrev);
// цикл for
/* function getNewArr(numbers: number[]): number[] {
  let res: number[] = [];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      res.push(numbers[i]);
    }
  }
  return res;
}
const compareArr = getNewArr(securitiesArr);
console.log(compareArr);
 */
// filter
// let arrListMorePrev = securitiesArr.filter(
//   (number: number, index: number, arr: number[]) => number > arr[index - 1],
// );
// console.log(arrListMorePrev);
// ===========================================================================================
//4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
// Знаходження максимального числа
// const maxVal = Math.max(...securitiesArr)
// reduce знаходження максимального
let maxVal = securitiesArr.reduce((initialValue, number) => {
    if (number > initialValue) {
        return number;
    }
    else {
        return initialValue;
    }
});
console.log(maxVal);
// (number/max)*100
// map
let arrPricesAsPercentage = securitiesArr.map((number) => (number / maxVal) * 100);
// reduce
// let arrPricesAsPercentage = securitiesArr.reduce((initialValue:number[], number:number)=> {
//   let numAsPercentage = (number/maxVal)*100
//   initialValue.push(numAsPercentage)
//   return initialValue
// },[])
console.log(arrPricesAsPercentage);
//=======================================
//5)Підрахувати кількість змін цін
// reduce
let countChanges = securitiesArr.reduce((countValue, number, index, array) => {
    if (array[index] !== array[index - 1] && index > 0) {
        return countValue + 1;
    }
    else {
        return countValue;
    }
}, 0);
console.log(countChanges);
// ===================================
//6)Визначити, чи є ціна, що менше 1000
// some
let priceLess1000 = securitiesArr.some((number) => number < 1000);
// reduce
// let priceLess1000 = securitiesArr.reduce(
//   (initialValue: boolean, number: number) =>
//     number < 1000 ? true : initialValue,
//   false,
// );
console.log(priceLess1000);
// =======================================
//7)Визначати, чи усі ціни більше за 1000
// every
let pricesMore1000 = securitiesArr.every((number) => number > 1000);
console.log(pricesMore1000);
// ===============================================
//8)Підрахувати кількість цін, що більше за 1000
// reduce
let countPricesMore1000 = securitiesArr.reduce((countInitial, number) => number > 1000 ? countInitial + 1 : countInitial, 0);
console.log(countPricesMore1000);
// ================================================
//9)Підрахувати суму цін, що більше за 1000
let countSumPricesMore1000 = securitiesArr.reduce((sum, number) => (number > 1000 ? sum + number : sum), 0);
console.log(countSumPricesMore1000);
// ===================================================
//10)Знайти першу ціну, що більше за 1000
// find
let firstPriceMore1000 = securitiesArr.find((number) => number > 1000);
// reduce
// let firstPriceMore1000 = securitiesArr.reduce((previousVal:number|null, number:number, index:number)=>{
//   if (number>1000 && previousVal===null) {
//     return number
//   }
//   return previousVal
// },null)
console.log(firstPriceMore1000);
// ===================================================
//11)Знайти індекс першої ціни, що більше за 1000
let indexPriceMore1000 = securitiesArr.findIndex((number) => number > 1000);
// reduce
// let indexPriceMore1000 = securitiesArr.reduce((previousVal:number, number:number, index:number)=>{
//   if (number>1000 && previousVal=== -1) {
//    return index
//   }
//   return previousVal
// },-1)
console.log(indexPriceMore1000);
// ===================================================
//12)Знайти останню ціну, що більше за 1000
let lastPriceMore1000 = securitiesArr.findLast((number) => number > 1000);
// reduce
// let lastPriceMore1000 = securitiesArr.reduce((previousVal:number|null, number:number)=>{
// if (number>1000 ) {
//     return number
//   }
//   return previousVal
// },null)
console.log(lastPriceMore1000);
// ===================================================
//13)Знайти індекс останньої ціни, що більше за 1000
let indexLastPriceMore1000 = securitiesArr.findLastIndex((number) => number > 1000);
// reduce
// let indexLastPriceMore1000 = securitiesArr.reduce((previousVal:number, number:number, index:number)=>{
//   if (number>1000) {
//     return index
//   }
//   return previousVal
// },-1)
console.log(indexLastPriceMore1000);
//# sourceMappingURL=task.js.map