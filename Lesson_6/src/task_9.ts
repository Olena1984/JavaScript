// З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його.

const password = 78;
let attempt = 0;
let userInput = 0;

do {
  userInput = parseInt(prompt("Введіть пароль", "")!);
  if (userInput === password) {
    break;
  } else {
    attempt++;
  }
} while (userInput !== password);
document.write(`Password = ${userInput} <br> Кількість спроб: ${attempt}`); 

// Якщо відома кількість спроб ввести пароль.

/* const password = 78;
let attempt = 5;
let userInput = 0;
let userAttempt = 1;

do { 
  userInput = parseInt(prompt(`Введіть пароль`, "")!);

  if (userInput === password) {
    alert(`Пароль вірний! Вітаю! Кількість спроб: ${userAttempt}`);
    break;
  } else {
    alert(`Пароль не вірний! Спробуйте ще раз!.`);
    userAttempt++;
  }
} while (userInput !== password && userAttempt <= attempt);
if (userInput !== password) {
    alert(`Ви вичерпали всі ${attempt} спроб. Пароль був: ${password}`);
}
 */
