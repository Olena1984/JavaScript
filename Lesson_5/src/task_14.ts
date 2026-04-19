//  Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

let score = parseInt(prompt("Ваш рахунок = ", "5000")!);
let totalPaid = 0;

while (totalPaid < score) {
  let userPay = parseInt(prompt(`готівка яку внесли ${totalPaid}`, "1000")!);
  totalPaid += userPay;
  if (totalPaid < score) {
    let diff = score - totalPaid;
    alert(`Коштів не вистачає! Доплатити ще ${diff}`);
  } else {
    alert(`Дякуємо за покупку`);
  }
}
if (totalPaid > score) {
    let change = totalPaid- score
    alert(`Ваш решта ${change}`)
}
