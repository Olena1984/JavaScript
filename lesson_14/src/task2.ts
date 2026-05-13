/* 
Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

*/
type DataObjType = {
  day: number;
  month: number;
  year: number;
};
const dateObj: DataObjType = {
  day: 5,
  month: 8,
  year: 2026,
};

function getMonth(obj: DataObjType, monthNum: number): number {
  // скільки всього місяців пройде від початку поточного року

  const totalMonth = (obj.month -1) + monthNum;
  // скільки повних років в цій кількості місяців
  const futureYear = obj.year + Math.floor(totalMonth / 12);

  return futureYear;
}
const month = 24
const res = getMonth(dateObj, month);
document.write(`Day: ${dateObj.day}, Month ${dateObj.month}, Year ${dateObj.year}`)
document.write(`<p> Через ${month} місяців буде ${res} рік </p>`)
console.log(res);
