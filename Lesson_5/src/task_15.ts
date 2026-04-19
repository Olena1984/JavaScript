// Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

let res = 0;
const YEAR_MONTH = 12;
let minTemp = +Infinity;
let maxTemp = -Infinity;

for (let time = 1; time <= YEAR_MONTH; time++) {
  const temp = parseInt(prompt(`Enter your temp month ${time}`, "0")!);
  res+=temp
  if (temp < minTemp) {
    minTemp = temp
  }
  if (temp>maxTemp) {
    maxTemp=temp
  }
}
const average = res / YEAR_MONTH
document.write(`<p>Середня температура становила ${average.toFixed(2)} градусів Сельсія</p><br>
<p>Найнижча температура становила ${minTemp} градусів Сельсія</p><br>
<p>Найвища температура становила ${maxTemp} градусів Сельсія</p>`)