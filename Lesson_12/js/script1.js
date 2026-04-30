/* Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою */

const arrNum = 30;
const min = 10;
const max = 200;
// генерую масив
function generateArr(number) {
  let newArr = [];
  for (let i = 0; i < number; i++) {
    let randNum = Math.floor(min + Math.random() * (max - min + 1));
    newArr.push(randNum);
  }
  return newArr;
}
const getArray = generateArr(arrNum);
console.log(getArray);
document.write(`<p> Згенерований масив чисел:<br>[${getArray}]</p><br>`);

// сортування бульбашкою

function bubbleSort(array) {
  let swap;
  let lastIndex = array.length - 1;
  let countSwap = 0;
  do {
    swap = false;
    for (let i = 1; i <= lastIndex; i++) {
      if (array[i - 1] > array[i]) {
        let tempVariable = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tempVariable;
        // document.write(`[${array}]<br>`)
        swap = true;
        countSwap++;
      }
    }
    lastIndex--;
  } while (swap);
  return {array, countSwap};
}
//вивід результатів
const sortArr = bubbleSort(getArray);
document.write(
  `<p>Відсортований масив:<br>[${sortArr.array}]<br><br>Кількість обмінів =${sortArr.countSwap} </p>`,
);
