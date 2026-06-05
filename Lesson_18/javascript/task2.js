"use strict";
// Зробити конвертер валют (курси валют – константи у скрипті)
const dollarRate = 44;
const euroRate = 51;
const sumGrn = document.getElementById("sumGrn");
function getConvert() {
    const grnValue = parseInt(sumGrn.value);
    console.log(grnValue);
    const grnToDoll = grnValue / dollarRate;
    console.log(grnToDoll);
    const resultD = document.getElementById("sumDollar");
    resultD.value = (grnToDoll.toFixed(2)).toString();
    const grnEuro = grnValue / euroRate;
    const resultE = document.getElementById("sumEuro");
    resultE.value = (grnEuro.toFixed(2)).toString();
}
const btnConvert = document.getElementById("convert");
btnConvert.onclick = getConvert;
//# sourceMappingURL=task2.js.map