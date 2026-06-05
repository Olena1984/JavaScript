// Користувач задає рік народження. Визначити кількість років користувача.
const currentYear = new Date().getFullYear();
console.log(currentYear);

function getYears() {
  const userInput = document.getElementById("userYear") as HTMLInputElement;
  const result = document.getElementById("result") as HTMLBaseElement;
  const userYear = parseInt(userInput.value);
  if (userYear > currentYear || userYear < 0) {
    result.innerText = `Не вірне число` 
    return
  }
  const yearsUser = currentYear - userYear;

  result.innerText = `Ваш вік: ${yearsUser.toString()}`;
}
const btn = document.getElementById("count") as HTMLButtonElement;
btn.onclick = getYears;
