/* Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь. */

const row = 4;
const col = 8;
const min = 1;
const max = 7;

let daysArr = Array.from({ length: row }, () =>
  Array.from({ length: col }, () =>
    Math.floor(min + Math.random() * (max - min + 1)),
  ),
);

const convertedArr = daysArr.map((row)=> row.join(" , ")).join("<br>")
document.write(`<p> Масив днів:<br>${convertedArr}<br></p>`)
daysArr.forEach(element => {
    
});

daysArr.forEach((row, index) => {
   let countInd =  row.reduce((sum, col) => {
      return col === 7 ? sum + 1 : sum;
    },0)
    document.write(`В рядку ${index+1} - знайдено ${countInd} неділь<br>`) 
});

