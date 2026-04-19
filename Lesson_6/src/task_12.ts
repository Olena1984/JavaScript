// З клавіатури вводяться поступово числа. Знайти два найбільші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.

/* 
1. змінна для пошуку першого найбільшого чила max1 = -Infinity
2. змінна для пошуку другого найбільшого числа max2 = -Infinify
3. робимо порівняння
4. проводимо арифметичну операцію
5. змінна для кількості чисел що будуть вводитися
6. Якщо результат вірний припинити цикл різниця двох чисел >5
7. якщо не вірний продовжити
 */

let max1 = -Infinity;
let max2 = -Infinity;
let result: number;


while (true) {
  let numbers = prompt("Enter number", "1");
  if (numbers === null) {
    break;
  }
  let num = parseInt(numbers);

  if (num > max1) {
    max2 = max1;
    max1 = num;
  } else if (num > max2) {
    max2 = num;
  }
  if (max2 !== -Infinity) {
    result = Math.abs(max1 - max2);
    if (result <= 5) {
      alert(`Різниця чисел max1 ${max1} та max2 ${max2} < 5`);
      break;
    } else {
      alert(`Різниця чисел ${max1} ${max2} > 5`);
      continue;
    }
  }
}
