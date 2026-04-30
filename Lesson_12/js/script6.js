/* 
Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
 */

const arrName = [
  "Vlad",
  "Olga",
  "Peter",
  "Jake",
  "Marianna",
  "Daniel",
  "Sofia",
  "Sam",
];
function sortName(array) {
  let changes;
  let lastInd = array.length;
  do {
    changes = false;
    for (let i = 1; i < lastInd; i++) {
      if (array[i - 1].length > array[i].length) {
        let tempVar = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tempVar;
        changes = true;
      }
    }
    lastInd--;
  } while (changes);
  return array;
}
const sortArr = sortName(arrName);
console.log(sortArr);
document.write(`<p>${sortArr.join(", ")}</p>`);

// бінарний пошук
const lastEl = sortArr.length - 1;
const nameLength = 5

function binarySearch(array, searchElement, start, end) {
  if (start>end) return -1
  const middleEl = Math.floor((start + end) / 2);
  if (array[middleEl].length === searchElement) return middleEl;
  if (array[middleEl].length < searchElement)
    return binarySearch(array, searchElement, middleEl + 1, end);
  if (array[middleEl].length > searchElement)
    return binarySearch(array, searchElement, start, middleEl - 1);
  else return -1;
}
const searchRes = binarySearch(sortArr,  nameLength, 0, lastEl);
if (searchRes!==-1) {
  document.write(`<p> Ім’я довжиною 5 символів знаходиться під індексом: ${searchRes} - ${sortArr[searchRes]}</p>`)
}else{
   document.write(`<p> Імені довжиною 5 символів немає </p>`)
}

