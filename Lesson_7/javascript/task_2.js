"use strict";
//  Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
function isWorkDay(userDay) {
    switch (userDay) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Working day";
        case 6:
        case 7:
            return "Rest day";
        default:
            //   return "Error! Wrong day number";
            throw new Error("Wrong day");
    }
}
// function isWorkDay(day: number): string {
//     if (day>=1 && day <=5) return 'Working day' 
//     if (day === 6 || day === 7) return 'Rest day'
//     return "Error! Wrong day number";
// }
const userDay = parseInt(prompt("Enter day number", "1"));
const workDay = isWorkDay(userDay);
alert(`№${userDay} - ${workDay} `);
//# sourceMappingURL=task_2.js.map