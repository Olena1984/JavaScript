"use strict";
/* Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3],[1, 2], [1, 3], [2, 3], [1, 2, 3]. */
const arr = [4, 5, 9];
// реалізація за допомогою  циклу
// function getSubsets(array: number[]): number[][] {
//   let subsetsArr: number[][] = [];
//   subsetsArr.push([]);
//   for (let i = 0; i < array.length; i++) {
//     const lengthArr = subsetsArr.length;
//     for (let j = 0; j < lengthArr; j++) {
//       const generateArr = [...subsetsArr[j], array[i]];
//       subsetsArr.push(generateArr);
//     }
//   }
//   return subsetsArr;
// }
// const res = getSubsets(arr);
// res.forEach((subset) => {
//   document.write(` ${subset}<br>`);
// });
// console.log(res);
//рекурсія
function generationOfSubsets(array, index, generateArr) {
    console.log(`index=${index}, generateArr=${JSON.stringify(generateArr)}`);
    if (index >= array.length) {
        document.write(` ${generateArr}<br>`);
        return;
    }
    generateArr.push(array[index]);
    generationOfSubsets(array, index + 1, generateArr);
    generateArr.pop();
    generationOfSubsets(array, index + 1, generateArr);
}
const res = generationOfSubsets(arr, 0, []);
console.log(res);
//# sourceMappingURL=task1.js.map