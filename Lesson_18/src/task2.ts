// Зробити конвертер валют (курси валют – константи у скрипті)

const dollarRate:number =  44
const euroRate:number =  51

const sumGrn = document.getElementById ("sumGrn") as HTMLInputElement

function getConvert() {
    const grnValue = parseInt(sumGrn.value)
    console.log(grnValue);
    
    const grnToDoll = grnValue / dollarRate
    console.log(grnToDoll);
    
    const resultD = document.getElementById("sumDollar") as HTMLInputElement
    resultD.value =( grnToDoll.toFixed(2)).toString()

    const grnEuro = grnValue / euroRate
    const resultE = document.getElementById("sumEuro") as HTMLInputElement
    resultE.value = (grnEuro.toFixed(2)).toString()
}

const btnConvert = document.getElementById("convert") as HTMLButtonElement
btnConvert.onclick = getConvert