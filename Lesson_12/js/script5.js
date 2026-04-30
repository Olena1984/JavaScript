/*
Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом. 
 */

const arrName = [
  "Vlad",
  "Olga",
  "Peter",
  "Jacob",
  "Maria",
  "Diana",
  "Sofia",
  "Sam",
];

function interSortName(array) {
  for (let k = 0; k < array.length; k++) {
    const currentName = array[k];
    let i = k - 1;
    while (i >= 0 && array[i] > currentName) {
      array[i + 1] = array[i];
      i--;
    }

    array[i + 1] = currentName;
  }
  return array;
}
const resSort = interSortName(arrName);
console.log(resSort);

document.write(`<p>${resSort.join(", ")}</p>`);
const searchingName = 'Olga'


const lastEl = resSort.length - 1
// бінарний пошук
function binarySearch(array, searchName, start, end) {
  if (start <= end) {
    const middleEl = Math.floor((start + end) / 2);
    if (array[middleEl] === searchName) return middleEl;
    if (array[middleEl] < searchName)
      return binarySearch(array, searchName, middleEl + 1, end);
    if (array[middleEl] > searchName)
      return binarySearch(array, searchName, start, end - 1, lastEl);
    else return -1;
  }
}
const res = binarySearch(arrName, searchingName, 0, lastEl);
if (res !==-1) {
    document.write(`<p>Ім'я ${searchingName} знаходиться під індексом ${res}</p>`)
}else{document.write(`<p>Ім'я ${searchingName} не знайдено</p>`)};

