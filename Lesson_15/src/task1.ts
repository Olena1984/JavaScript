/* 
Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

*/
const obj1 = {
  number: [2, 23, 56, 9, 10, 3, 91, 6, 8],
  getSum() {
    return this.number.reduce((prevSum, number) => prevSum + number, 0);
  },
};
const obj2 = {
  number: [12, 3, 7, 9, 54, 67, 99],
  getProduct(){
    const minInd = this.number.indexOf(Math.min(...this.number))
    const maxInd = this.number.indexOf(Math.max(...this.number))
    const start = Math.min(minInd, maxInd)
    const end = Math.max(minInd, maxInd)
    const product = this.number.slice(start, end+1).reduce((prevProd, number)=> prevProd*number,1)
    return product
  }
};
const resObj1 = obj1.getSum()
const resObj2 = obj2.getProduct()
console.log(resObj1)
console.log(resObj2)
// --------call & apply obj2----------
let res1 = obj1.getSum.apply(obj2)
console.log(res1);
let res2 = obj1.getSum.call(obj2)
console.log(res2);

// --------call & apply obj1----------
let res3 = obj2.getProduct.apply(obj1)
console.log(res3);
let res4 = obj2.getProduct.call(obj1)
console.log(res4);