// Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.


const CENT_TO_INCH = 0.3937;
const KIL_TO_POUND = 2.20462;
const KM_TO_Mi = 0.6214;

// Сантиметри у дюйми
function convertCentToInc(number: number): number {
  return number * CENT_TO_INCH;
}
const userNumber = parseInt(prompt("Enter your number in centimeters", "23")!);
const convertInch = convertCentToInc(userNumber);
alert(`${userNumber} см це ${convertInch.toFixed(2)} дюймів`);

// Кілограми у фунти;
function convertKilToPounds(num: number): number {
  return num * KIL_TO_POUND;
}
const userNum = parseInt(prompt("Enter your number in kilograms", "23")!);
const convertPounds = convertKilToPounds(userNumber);
alert(`${userNum} кг це ${convertPounds.toFixed(2)} фунтів`);

// Кілометри у милі
function kmToMiles(num: number): number {
  return num * KM_TO_Mi;
}
const userN = parseInt(prompt("Enter your number in kilometers", "23")!);
const convertMiles = kmToMiles(userNumber);
alert(`${userN} км це ${convertMiles.toFixed(2)} миль`);
