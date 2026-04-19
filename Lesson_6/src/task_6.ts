/* На екрані виводиться меню:
	1.Ініціалізація (сума=0)
	2.Додати 2
	3.Додати 3
	4.Відняти 2
	5.Відняти 3.
	6.Вивести суму
	7.Вихід.
Шляхом поступового вибору відповідних пунктів спробувати отримати число N, яке вводиться з клавіатури.
 */

alert(
  "Вітаю! Це гра, в якій ви повинні отримати число N. Для цього вам потрібно вибирати пункти меню, які будуть додавати або віднімати числа від вашої суми. Починаємо!\n\n1. Ініціалізація (сума=0)\n2. Додати 2\n3. Додати 3\n4. Відняти 2\n5. Відняти 3\n6. Вивести суму\n7. Вихід",
);

let finalSum: number = 0;
let userNumberChoice: number;
const calculatedNumber = parseInt(prompt("Введіть число яке хочете отримати:", "")!);

do {
  userNumberChoice = parseInt(prompt("Зробіть ваш вибір", "1")!);
  switch (userNumberChoice) {
    case 1:
      alert("Ви вибрали 1. Ініціалізація (сума=0)");
      finalSum = 0;
      break;
    case 2:
      alert(`Додати 2.\nПоточна сума: ${finalSum}`);
      finalSum += 2;
      break;
    case 3:
      alert(`Додати 3.\nПоточна сума: ${finalSum}`);
      finalSum += 3;
      break;
    case 4:
      alert(`Відняти 2.\nПоточна сума: ${finalSum}`);
      finalSum -= 2;
      break;
    case 5:
      alert(`Відняти 3.\nПоточна сума: ${finalSum}`);
      finalSum -= 3;
      break;
    case 6:
      alert(`Поточна сума: ${finalSum}`);
      break;
    case 7:
      alert("Дякую за гру!");
      break;

    default:
      alert("Невірний вибір. Будь ласка, виберіть число від 1 до 7.");
      break;
  }
  if (finalSum === calculatedNumber) {
    alert(`Вітаю! Ви отримали число ${calculatedNumber}!`);
    break;
  }
} while (userNumberChoice !== 7);
