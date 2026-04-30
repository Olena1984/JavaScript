/* Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням. */

//генерую масив
const arrNum = 30;
const min = 5;
const max = 300;
function getArr(arrNumber, minNum, maxNum) {
  return Array.from({ length: arrNumber }, () =>
    Math.floor(minNum + Math.random() * (maxNum - minNum + 1)),
  );
}
const generatedArr = getArr(arrNum, min, max);
document.write(`<p>Згенерований масив:<br>[${generatedArr}]</p>`);
console.log(generatedArr);
// сортування змішуванням

function cocktailSort(array) {
  let start = 0;
  let end = array.length - 1;
  let swapCount = 0;
  let swapChange;
  while (start < end) {
    for (let i = start+1; i < end; i++) {
      if (array[i-1] > array[i]) {
        let t = array[i - 1];
        array[i - 1] = array[i];
        array[i] = t;
        swapChange = true;
        swapCount++;
      }
    }
    end--;
    if (!swapChange) break // якщо немає обмінів перервати цикл
    swapChange = false;
    for (let j = end; j >= start; j--) {
      if (array[j-1] > array[j]) {
        let t2 = array[j - 1];
        array[j - 1] = array[j];
        array[j] = t2;
        swapChange = true;
        swapCount++;
      }
    }
    start++;
    if (!swapChange) break
  }
  return { array, swapCount };
}
const getResult = cocktailSort(generatedArr);
document.write(`<p>Відсортований масив:<br>[${getResult.array}]<br>Кількість обмінів =${getResult.swapCount}`)
