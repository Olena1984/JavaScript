"use strict";
/*
Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

*/
const boysArr = ["Андрій", "Теодор", "Тимофій", "Владислав"];
const girlsArr = ["Соломія", "Божена", "Емілія", "Марія"];
let generateList = [];
let pair = [];
document.write(`<p>Список хлопців: ${boysArr}<br> Список дівчат: ${girlsArr} </p>`);
// for
// function pairsCombinations(boys:string[], girls:string[], newArr:string[][]):void {
//     for (let i = 0; i < boys.length; i++) {
//         for (let j = 0; j < girls.length; j++) {
//             newArr.push([boys[i], girls[j]])
//         }
//     }
// }
// const resCombinations = pairsCombinations(boysArr, girlsArr, generateList)
// generateList.forEach((element, index) => {
//     document.write(`<p>Пара №:${index+1} ${element[0]} + ${element[1]}<br></p>`)
// });
// function getPairs(boys: string[], girls: string[], newArr: string[][]) {
//   // let pair:string[]=[]
//   if (pair.length === 2) {
//     newArr.push([...pair]);
//     return;
//   }
//   boys.forEach((boy) => {
//     girls.forEach((girl) => {
//       pair.push(boy);
//       pair.push(girl);
//       getPairs(boys, girls, newArr);
//       pair.pop();
//       pair.pop();
//     });
//   });
// }
// рекурсія
function getPairs(boys, girls, index, newArr) {
    // let pair:string[]=[]
    if (pair.length === 2) {
        newArr.push([...pair]);
        return;
    }
    if (index >= boys.length) {
        return;
    }
    girls.forEach((girl) => {
        pair.push(girl);
        pair.push(boys[index]);
        getPairs(boys, girls, index + 1, newArr);
        pair.pop();
        pair.pop();
    });
    getPairs(boys, girls, index + 1, newArr);
}
const pairList = getPairs(boysArr, girlsArr, 0, generateList);
generateList.forEach((element, index) => {
    document.write(`<p>Пара №${index + 1}:<br>${element[0]} + ${element[1]}</p>`);
});
// console.log(generateList);
//# sourceMappingURL=task4.js.map