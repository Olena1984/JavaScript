//  Створити функцію, яка за номером місяця повертає його назву.

function getMonthName(monthNum: string | null): string {
  switch (monthNum) {
    case "1":
      return "January";
    case "2":
      return "February";
    case "3":
      return "March";
    case "4":
      return "April";
    case "5":
      return "May";
    case "6":
      return "June";
    case "7":
      return "July";
    case "8":
      return "August";
    case "9":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
    default:
      throw new Error("Wrong number month");
      // return "Error month";

  }
}
const monthNum = prompt("Введіть номер місяця", "");
const monthName = getMonthName(monthNum);
alert(`${monthNum} - ${monthName}`);
