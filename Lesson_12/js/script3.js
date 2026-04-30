/* Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями. */
const arrNum = 30;
const min = 50;
const max = 500;
//генерую масив

function getNewArray(number, minVal, maxVal) {
  return Array.from({ length: number }, () =>
    Math.floor(minVal + Math.random() * (maxVal - minVal + 1)),
  );
}
const getArr = getNewArray(arrNum, min, max);
document.write(`<p>Згенерований масив чисел:<br>[${getArr}]<br><br></p>`);

//сортування виключеннями
function insertionSort(array) {
  let swapCount = 0;
  for (let i = 1; i < array.length; i++) {
    let currentEl = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentEl) {
      array[j + 1] = array[j];
      j--;
      swapCount++
    }
    array[j + 1] = currentEl;
   
  }
  return {array, swapCount}
}
const resSort = insertionSort(getArr);
document.write(`<p>Відсортований масив вставками:<br>[${resSort.array}]<br>Кількість переміщень = ${resSort.swapCount} </p>`);
