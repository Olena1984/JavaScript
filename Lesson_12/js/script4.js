/* 
Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком
Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
*/

const arrNum = 5;
const min = 5;
const max = 300;
function getArr(arrNumber, minNum, maxNum) {
  return Array.from({ length: arrNumber }, () =>
    Math.floor(minNum + Math.random() * (maxNum - minNum + 1)),
  );
}
const generatedArr = getArr(arrNum, min, max);
// document.write(`<p>Згенерований масив:<br>[${generatedArr}]</p><br>`);
// ================================================================================
// 1 Сортування бульбашкою

document.write(`<p>Сортування бульбашкою</p>`);
document.write(`<p>Згенерований масив:<br>[${generatedArr}]</p><br>`);
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
        printStep(array, i);
        swap = true;
        countSwap++;
      }
    }
    lastIndex--;
  } while (swap);

  return { array, countSwap };
}
const copy = JSON.parse(JSON.stringify(generatedArr))
const sortArr = bubbleSort(copy);

// Функція виводу етапів переміщення
function printStep(array, indexActive) {
  document.write(`<table class="sort">`);
  document.write(`<tr class="sortRow">`);
  for (let i = 0; i < array.length; i++) {
    document.write(`<td class="sortCol">${i}</td>`);
  }
  document.write(`</tr>`);
  document.write(`<tr class="sortRow">`);
  for (let j = 0; j < array.length; j++) {
    if (j === indexActive) {
      document.write(`<td class="active sortCol">${array[j]}</td>`);
    } else {
      document.write(`<td td class="sortCol">${array[j]}</td>`);
    }
  }
  document.write(`</tr><br>`);
  document.write(`</table>`);
}
// ===========================================================================
// 2 сортування змішуванням
document.write(`<p><br>Сортування змішуванням</p>`);
document.write(`<p>Згенерований масив:<br>[${generatedArr}]</p><br>`);
function cocktailSort(array) {
  let start = 0;
  let end = array.length - 1;
  let swapCount = 0;
  let swapChange;
  while (start < end) {
    for (let i = start+1; i <= end; i++) {
      if (array[i-1] > array[i]) {
        let t = array[i - 1];
        array[i - 1] = array[i];
        array[i] = t;

        printStep(array, i);

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

        printStep(array, j-1);

        swapChange = true;
        swapCount++;
      }
    }
    start++;
    if (!swapChange) break
  }
  return { array, swapCount };
}
const copy2 = JSON.parse(JSON.stringify(generatedArr))
const getResult = cocktailSort(copy2);

// ====================================================================
// сортування виключеннями
document.write(`<p><br>Сортування виключеннями</p>`);
document.write(`<p>Згенерований масив:<br>[${generatedArr}]</p><br>`);
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
    printStep(array, j+1);
  }
  return {array, swapCount}
}
const copy3 = JSON.parse(JSON.stringify(generatedArr))
const resSort = insertionSort(copy3);

