// Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

let totalProfit = 0;
let weekProfit:number

let weekNum = parseInt(prompt("Введіть кількість тижнів", "")!);
let dayOfWeek = parseInt(prompt("Введіть кількість днів", "")!);

for (let week = 1; week <= weekNum; week++) {
    weekProfit = 0;
  for (let day = 1; day <= dayOfWeek; day++) {
    let dayProfit = parseInt(
      prompt(`Введіть прибуток за тиждень №${week} та день №${day}`, "100")!,
    );
    weekProfit += dayProfit;
  }
  document.write(`Прибуток за тиждень №${week}= ${weekProfit}`)
  totalProfit += weekProfit;
  
}
document.write(`Загальний прибуток за №${weekNum} тижні= ${totalProfit}`);
