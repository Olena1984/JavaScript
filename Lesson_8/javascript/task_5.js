"use strict";
/*  Дано послідовність оцінок учня. Підрахувати кількість:
1)	двійок
2)	кількість хороших оцінок (добре, відмінно);
3)	кількість оцінок, які нижче середнього.
 */
/*
1. генерую масив оцінок учня
2. підраховую кількість двійок
3. підраховую кількість хорошич оцінок
4. кількість оцінок нижче середнього
5. вивід результатів
*/
// функція що генерує масиа оцінок
function generatePupilNumber(number) {
    let arrScores = [];
    for (let i = 0; i < number; i++) {
        let score = 2 + Math.floor(Math.random() * (5 - 2 + 1));
        arrScores.push(score);
    }
    return arrScores;
}
const scoreNumber = parseInt(prompt('Введіть кількість оцінок учня', '10'));
const pupilScores = generatePupilNumber(scoreNumber);
// Розподіл на окремі функції 
function countBadGrades(scores) {
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === 2)
            count++;
    }
    return count;
}
function countGoodGrades(scores) {
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === 4 || scores[i] === 5)
            count++;
    }
    return count;
}
function countAvrGrades(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    const avrScore = sum / scores.length;
    return avrScore;
}
function countLessAvr(scores, average) {
    let scoresLessAvr = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < average)
            scoresLessAvr++;
    }
    return scoresLessAvr;
}
const badScores = countBadGrades(pupilScores);
const goodScores = countGoodGrades(pupilScores);
const avr = countAvrGrades(pupilScores);
const scoresLessAvr = countLessAvr(pupilScores, avr);
document.write(`<div>Оцінки учня: ${pupilScores}.<br>Кількість двійок = ${badScores}.<br>Кількість хороших оцінок (добре, відмінно) = ${goodScores}.<br>Середній бал = ${avr}.<br> Кількість оцінок, які нижче середнього = ${scoresLessAvr}.</div>
`);
//Загальна функція 
// function countTheNumberOfScores(scores:number[]) {
//     let countBadScores:number = 0
//     let countGoodScores:number = 0
//     let sum:number=0
//     for (let i = 0; i < scores.length; i++) {
//         sum+=scores[i]
//         if (scores[i] === 2)  countBadScores++
//         if (scores[i] === 4 || scores[i]=== 5) countGoodScores++
//     } 
//     const avrScore:number =  sum/scores.length
//     let scoresLessAvr:number = 0
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i]<avrScore) 
//             scoresLessAvr++
//     }
//     return {countBadScores,countGoodScores, scoresLessAvr}
// }
// const {countBadScores,countGoodScores, scoresLessAvr} = countTheNumberOfScores(pupilScores)
// document.write(`Оцінки учня: ${pupilScores}.<br>Кількість двійок = ${countBadScores}.<br>Кількість хороших оцінок (добре, відмінно) = ${countGoodScores}.<br>Кількість оцінок, які нижче середнього = ${scoresLessAvr}`)
//# sourceMappingURL=task_5.js.map