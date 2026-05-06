/* 
Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).
*/
const namesAthletes = [
  "Ярослава",
  "Ольга",
  "Еліна",
  "Марта", 
  "Ангеліна",
];
document.write(`<p>Список спотсменів: ${namesAthletes}</p><br>`)

function competitionResults(
  array: string[],
  arrIndex: number,
  prizePlace: number,
  resArr: string[][],
  currentRes: string[],
): void {
  if (currentRes.length === prizePlace) {
    resArr.push([...currentRes]);
    return;
  }
  array.forEach((element) => {
    let check = currentRes.some((el) => el === element);
    if (check) {
      return;
    }
    if (!check) currentRes.push(element);
    competitionResults(array, arrIndex + 1, prizePlace, resArr, currentRes);
    if (!check) currentRes.pop();
  });
}
const prizeNum: number = 3;
let resultArr: string[][] = [];
const resTable = competitionResults(namesAthletes, 1, prizeNum, resultArr, []);
console.log(resultArr);
console.log(resultArr);

resultArr.forEach((competitor, index) => {
  document.write(
    `Варіант ${index + 1}:<br> 1) ${competitor[0]}, 2) ${competitor[1]}, 3) ${competitor[2]}<br><br>`,
  );
});

// for
// let listResult:string[][]=[]
// function competitionResults(array: string[]): void {
 
//   for (let first = 0; first < array.length; first++) {
//     for (let second = 0; second < array.length; second++) {
//       if (second === first) continue;
//       for (let third = 0; third < array.length; third++) {
//         if (third === first || second === third) continue;
//         listResult.push([array[first], array[second], array[third]]) 
//       }
//     }
//   }
// }
// const result = competitionResults(namesAthletes);
// console.log(listResult);

// listResult.forEach((element, index) => {
//   document.write(`<p>Варіант №${index+1}: 1 місце: ${element[0]}, 2 місце: ${element[1]}, 3 місце: ${element[2]}<br><br></p>`)
// });

