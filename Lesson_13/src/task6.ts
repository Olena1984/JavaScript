/* 
З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

*/

const givenWord: string = "summer";

function iteratorWords(word: string) {
  let indexWord = 0;
  function wordByLetters() {
    let numLetter = word[indexWord];
    indexWord++;
    if (indexWord >= word.length) {
      indexWord = 0;
    }
    return numLetter;
  }
  return wordByLetters;
}
const printRes = iteratorWords(givenWord);

for (let i = 0; i < 30; i++) {
  console.log(printRes());
}

// гра перекладач
alert(
  "Загадане слово асоціюється переважно з літом. Цей напій полюбляють як діти так і дорослі. Охолоджує у жарку погоду.\nЗдогоадалися,що це?\nПідказка слово містить 8 літер(розгадка англійською мовою).\nУдачі у відгадуванні.",
);

const guessTheWord: string = "lemonade".toLowerCase();

function translator(word: string) {
  let indexOfWord = 0;
  let guessWord = 0;
  function letterOfWord() {
    let userAttempt = prompt(
      `Введіть літеру загадуваного слова. Літера№${indexOfWord+1}`,
      "A",
    )?.toLowerCase();
    let numLetter = word[indexOfWord];

    if (userAttempt === numLetter) {
      guessWord++;
    }
    indexOfWord++;
    return guessWord;
  }
  return letterOfWord;
}
const result = translator(guessTheWord);
let finalScore: number = 0;
for (let i = 0; i < guessTheWord.length; i++) {
  finalScore = result();
}
document.write(
  `<p>Кількість вгаданих літер = ${finalScore}, загадане слово: ${guessTheWord}</p>`,
);
