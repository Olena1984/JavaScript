// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)

/* 
1. ввести кількість предметів
2. ввести оцінки по цих предметах
3. знайти середній бал
4. визначити категорію за середнім балом і вивести її
5. вивести категорію за наявністю двійок і трійок
6. вивести категорію за наявністю відмінних оцінок
7. вивести категорію за наявністю хороших оцінок
8. створити функцію порівняння категорій і вивести результат
*/
/* Для 5-бальної системи:
    Відмінник: 4.75–5.0
    Хорошист: 3.75–4.74
    Трієчник: 3.0–3.74
 */

// генеруємо масив оцінок для заданої кількості предметів

function getArrayGrades(numOfSubjects: number): number[] {
    let grades: number[] = [];
    for (let i = 0; i < numOfSubjects; i++) {
    let grade = 1 + Math.floor(Math.random() * (5 - 1 + 1)); // Генеруємо випадкову оцінку від 1 до 5

    grades.push(grade);
  }
  return grades;
}
// задаємо кількість предметів
let numOfSubjects = parseInt(prompt("Enter the number of subjects:", "5")!);

// знаходимо середній бал учня

function calculateAverage(grades: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  let average: number = sum / grades.length;
  average = parseFloat(average.toFixed(2));
  return average;
}
// визначаємо категорію  студента
function assignCategory(number: number): string {
  let category: string = "";
  if (number >= 4.75 && number <= 5.0) category = "excellent student";
  if (number >= 3.75 && number < 4.75) category = "good student";
  if (number >= 3.0 && number < 3.75) category = "satisfactory student";
  if (number < 3.0) category = "bad student";

  return category;
}
// вивід результатів

let studentGrades = getArrayGrades(numOfSubjects);
const studentAverage = calculateAverage(studentGrades);
let studentCategory = assignCategory(studentAverage);

alert(
  `Student grades: ${studentGrades}\nGrade average = ${studentAverage}\nAverage category: ${studentCategory}`,
);
