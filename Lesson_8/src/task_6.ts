/* Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
Приклад збереження даних
let productsPrices = [1000, 20, 31]
let productsTitles = [‘cheese’, ‘juice’, ‘bread’]
 */

/* 
1. Створити масив цін та масив товарів
2. Ввести суму коштів користувача
3. порівняти ціни товарів із сумою користувача
4. вивести результат
*/
let pricesProducts = [200, 450, 1000, 600, 150, 300];
let titlesProducts = ["сир", "ковбаса", 'м"ясо', "торт", "пельмені", "цукерки"];
const userMoney = parseInt(prompt("Введіть вашу суму коштів", "1000")!);

function userBuyList(prices: number[], products: string[], money: number) {
  let boughtPrices: number[] = [];
  let boughtTitles: string[] = [];
  let sum: number = 0;
  let balanceMoney: number = money;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= balanceMoney) {
      boughtPrices.push(prices[i]);
      boughtTitles.push(products[i]);
      sum += prices[i];
      balanceMoney -= prices[i];
    }
  }

  return { boughtPrices, boughtTitles, balanceMoney };
}
const { boughtPrices, boughtTitles, balanceMoney } = userBuyList(
  pricesProducts,
  titlesProducts,
  userMoney,
);

document.write(
  `<div>Список товарів ${titlesProducts}.<br> Ціни на товари ${pricesProducts}.<br> Кошти покупця ${userMoney} грн.<br> Покупець купив наступні товари: ${boughtTitles}<br>за такими цінами: ${boughtPrices}.<br>Залишок коштів = ${balanceMoney}грн.</div>`,
);
