/*
Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
1) загальний прибуток кожного магазину за тиждень;
2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
3) загальний прибуток за робочі дні
4) загальний прибуток за вихідні дні
5) максимальний прибуток за середу
6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
7) відсортувати кожен тиждень за зростанням
8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
 */
const min = 1;
const max = 300;
const row = 10;
const col = 7;
let arrTable = Array.from({ length: row }, () =>
  Array.from({ length: col }, () =>
    Math.floor(min + Math.random() * (max - min) + 1),
  ),
);
const profitsArr = arrTable.map((row) => row.join(" , ")).join("<br>");
document.write(
  `<p>Масив ${row} магазинів з прибутком за ${col} днів:<br><br>${profitsArr}<br><br></p>`,
);
console.log(arrTable);

//  1) загальний прибуток кожного магазину за тиждень;

// for
let totalProfitEveryShop: number[] = [];
for (let shop = 0; shop < arrTable.length; shop++) {
  let profitOneShop = 0;
  for (let day = 0; day < arrTable[shop].length; day++) {
    profitOneShop += arrTable[shop][day];
  }
  totalProfitEveryShop.push(profitOneShop);
}
console.log(totalProfitEveryShop);

// reduce
// let totalProfitEveryShop1 = arrTable.reduce(
//   (previousSum: number[], shops: number[]) => {
//     let oneShopProfit = shops.reduce(
//       (daySum: number, days: number) => daySum + days,
//       0,
//     );
//     previousSum.push(oneShopProfit);
//     return previousSum;
//   },
//   [],
// );
document.write(
  `<p>1.Загальний прибуток кожного магазину за тиждень ${totalProfitEveryShop}</p><br>`,
);
console.log(totalProfitEveryShop);

// 2) загальний прибуток усіх магазинів по днях (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// for
let totalProfitForDay: number[] = [];
for (let days = 0; days < arrTable[0].length; days++) {
  let profitForDay: number = 0;
  for (let shops = 0; shops < arrTable.length; shops++) {
    profitForDay += arrTable[shops][days];
  }
  console.log(profitForDay);

  totalProfitForDay.push(profitForDay);
}

document.write(
  `<p>2. Прибуток магагинів по днях: ${totalProfitForDay}</p><br>`,
);
console.log(totalProfitForDay);

// 3) загальний прибуток за робочі дні
// for
let totalSumWorkDay = 0;
for (let shops = 0; shops < arrTable.length; shops++) {
  for (let days = 0; days < 5; days++) {
    totalSumWorkDay += arrTable[shops][days];
  }
}
// reduce
// let sumWorkDays = arrTable.reduce((prevSum:number, shops:number[])=> {
//   const workDay = shops.slice(0,5)
//   const sumDays = workDay.reduce((prevVal:number, day:number)=>prevVal+day,0)
//   return prevSum +sumDays
// },0)

// const MONDAY = 0;
// const FRIDAY = 4;
// let sumWorkDays = arrTable.reduce((prevSum: number, shops: number[]) => {
//   return (
//     prevSum +
//     shops.reduce((daysSum: number, days: number, daysInd: number) => {
//       return daysInd >= MONDAY && daysInd <= FRIDAY ? daysSum + days : daysSum;
//     }, 0)
//   );
// }, 0);
// console.log(sumWorkDays);

document.write(
  `<p>3.Загальний прибуток за робочі дні: ${totalSumWorkDay}</p><br>`,
);
console.log(totalSumWorkDay);

// 4) загальний прибуток за вихідні дні
// for
let sumForRastDays = 0;
for (let shops = 0; shops < arrTable.length; shops++) {
  for (let days = 5; days < 7; days++) {
    sumForRastDays += arrTable[shops][days];
  }
}

// reduce
// const WEEKEND_START = 5; // Субота
// const WEEKEND_END = 6;   // Неділя
// let profitRestDay = arrTable.reduce((prevProfit:number, shops:number[])=> {
//   return prevProfit+shops.reduce((daysProfit:number, days:number, dayInd:number)=>{
//     return dayInd>=WEEKEND_START && dayInd<=WEEKEND_END? daysProfit+days:daysProfit
//   }
//   ,0)
// },0)
// let profitRestDay = arrTable.reduce((prevProfit:number, shops:number[])=>{
//   const weekendDays = shops.slice(5,7)
//   const profits = weekendDays.reduce((prevSum:number, day:number)=> prevSum+day,0)
//   return profits +prevProfit
// },0)
// console.log(profitRestDay);

document.write(
  `<p>4.Загальний прибуток за вихідні дні: ${sumForRastDays}</p><br>`,
);
console.log(sumForRastDays);

// 5) максимальний прибуток за середу
let maxProfitOfWednesday = -Infinity;
for (let shops = 0; shops < arrTable.length; shops++) {
  const wednesday = arrTable[shops][2];
  if (wednesday > maxProfitOfWednesday) maxProfitOfWednesday = wednesday;
}
// reduce
// let maxValueWend = arrTable.reduce((prevVal:number, shops:number[])=>{
// return (shops[2]>prevVal)?prevVal=shops[2]:prevVal
// },0)
// console.log(maxValueWend);

document.write(
  `<p>5.Максимальний прибуток за середу: ${maxProfitOfWednesday}</p><br>`,
);
console.log(maxProfitOfWednesday);

// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// let arrSimple= arrTable.flat(Infinity)
// let  profitMore2001 = arrSimple.filter((number:number)=>number>200)
// console.log(profitMore2001);

let profitMore200 = arrTable
  .flat(2)
  .filter((number) => number > 200);
document.write(
  `<p>6.Список (одновимірний масив) зі значеннями, які більші за 200: ${profitMore200}</p><br>`,
);
console.log(profitMore200);

// 7) відсортувати кожен тиждень за зростанням
let newArrTable:number[][]= JSON.parse( JSON.stringify (arrTable))
for (let shops = 0; shops < newArrTable.length; shops++) {
  newArrTable[shops].sort((a: number, b: number): number => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
}
const joinedArray = newArrTable.map((row) => row.join(" , ")).join("<br>");
document.write(
  `<p>7.Кожен тиждень відсортований за зростанням:<br> ${joinedArray}</p><br>`,
);
// console.log(arrTable);

// 8) відсортувати тижні (рядки) за спаданням максимального елемента у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

// for
let sortArr = arrTable.sort((a: number[], b: number[]): number => {
  // let maxA = a[0];
  // let maxB = b[0];
  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] > maxA)  maxA= a[i];
  // }
  // for (let j = 0; j < b.length; j++) {
  //   if (b[j] > maxB)  maxB =b[j];
  // }
  let maxA = a.reduce((prevMax:number, number:number) =>(prevMax>number?prevMax:number),0)
  let maxB = b.reduce((prevMax:number, number:number) =>(prevMax>number?prevMax:number),0)
  if (maxB > maxA) return 1;
  if (maxA > maxB) return -1;
  else return 0;
});
const splitSortArr = sortArr.map((row) => row.join(" , ")).join("<br>");
document.write(
  `<p>8.Відсортовані тижні (рядки) за спаданням максимального елемента у цьому тижні (рядку):<br> ${splitSortArr}</p><br>`,
);
console.log(sortArr);

// let sortRows = arrTable.sort((a:number[], b:number[]):number =>{
//   const maxA= Math.max(...a)
//   const maxB = Math.max(...b)
//   return maxB-maxA

// })
// console.log(sortRows);

// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
let arrTableNew:number[][]= JSON.parse( JSON.stringify (arrTable))
let sumSortArr = arrTableNew.sort((a:number[],b:number[]):number => {
let sumA:number =a.reduce((prevSum:number, number:number) => prevSum+number,0);
let sumB:number = b.reduce((prevSum:number, num:number)=> prevSum+num,0);

if (sumA>sumB) return -1
else if(sumA<sumB) return 1
else return 0
})
const splitSumSortArr  = sumSortArr.map((row) => row.join(" , ")).join("<br>");
document.write(
  `<p>9.Упорядкувані тижні (рядки) за спаданням суми елементів у рядку:<br> ${splitSumSortArr}</p><br>`,
);
console.log(sumSortArr);
