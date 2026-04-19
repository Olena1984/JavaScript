// З клавіатури вводиться вартість одиниці товару. Поки користувач не введе суму грошей, яка достатня для купівлі товару або не відмовиться від купівлі давати можливість вводити суму грошей.

/* 
1. відома вартість товару - створити змінну
2. створити змінну для зберігання суми грошей, яку вводить користувач. ввести перше значення користувача і порівняти його з вартістю товару.

3. порівнюємо чи достатньо коштів внесено за покупку, якщо ні вносимо
4. Якщо сума достатня або покупець відмовився перериваємо цикл
 */

const productPrice = parseInt(prompt("Введіть вартість одиниці товару:", "")!);
let userMoney: string | null = null;
let totalMoney = 0;


do {
  let remaininToPay = productPrice - totalMoney;
  userMoney = prompt(
    `До оплати ${remaininToPay} грн.\nВведіть відповідну суму грошей (або натисніть "Скасувати" для відмови покупки):`,
    "",
  );
  if (userMoney === null) {
    alert("Ви відмовилися від покупки.");
    break;
  }
  let toPay = parseInt(userMoney);
  totalMoney += toPay;
  if (totalMoney < productPrice) {
    alert(
      `Ви внесли ${totalMoney} грн.\nЗалишок до оплати: ${productPrice - totalMoney} грн.`,
    );
  } else {
    alert("Вітаю з покупкою товару!");
    break;
  }
} while (totalMoney < productPrice);
if (totalMoney > productPrice) {
  alert(`Ваш залишок після покупки: ${totalMoney - productPrice} грн.`);
}
