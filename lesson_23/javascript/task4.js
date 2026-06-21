"use strict";
// Задача 1. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
let pupilsAge = [12, 10, 6, 9, 8, 13, 10, 15, 12, 9, 8];
const maxAge = Math.max(...pupilsAge);
let map = new Map();
for (const element of pupilsAge) {
    if (map.has(element))
        map.set(element, map.get(element) + 1);
    else
        map.set(element, 1);
}
for (const [key, value] of map) {
    document.write(`${key} = ${value}<br>`);
}
document.write(`Максимальний вік = ${maxAge}. Зустрічається ${map.get(maxAge)} раз`);
document.write(`<hr>`);
const bookList = [
    {
        name: "The why cafe",
        year: 2011,
        author: "John P.Strelecky",
    },
    {
        name: "Return to the why cafe",
        year: 2014,
        author: "John P.Strelecky",
    },
    {
        name: "Kobzar",
        year: 1840,
        author: "T.G.Shevchenko",
    },
    {
        name: "Forest song",
        year: 1911,
        author: "Lesya Ukrainka",
    },
    {
        name: "Boyarina",
        year: 1913,
        author: "Lesya Ukrainka",
    },
];
const mapBook = new Map();
for (const element of bookList) {
    if (mapBook.has(element.author)) {
        mapBook.set(element.author, mapBook.get(element.author) + 1);
    }
    else {
        mapBook.set(element.author, 1);
    }
}
for (const [key, value] of mapBook) {
    document.write(`<br>${key} - ${value}<br>`);
}
// console.log(mapBook);
document.write(`<hr>`);
// ========================================================================================================
// Задача 3. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.
const logins = [
    "user_alex",
    "sunny_cat",
    "user_alex",
    "dev_olena",
    "sunny_cat",
    "night_owl",
    "dev_olena",
    "user_alex",
    "pixel_fox",
    "sunny_cat",
    "ghost_77",
    "night_owl",
];
const loginMap = new Map();
for (const login of logins) {
    if (loginMap.has(login)) {
        loginMap.set(login, loginMap.get(login) + 1);
    }
    else {
        loginMap.set(login, 1);
    }
}
for (const [key, value] of loginMap) {
    document.write(` ${key} - ${value}<br>`);
}
// console.log(loginMap);
document.write(`<hr>`);
const students = [
    {
        name: "Onysko Bozhena",
        course: 2,
        faculty: "Geography",
    },
    {
        name: "Bilous Yana",
        course: 4,
        faculty: "Psychology",
    },
    {
        name: "Bokalo Matviy",
        course: 1,
        faculty: "History",
    },
    {
        name: "Block Zlata",
        course: 2,
        faculty: "History",
    },
    {
        name: "Staciv Andrew",
        course: 2,
        faculty: "Law",
    },
];
const mapStudent = new Map();
const mapCourse = new Map();
students.forEach((element) => {
    if (mapStudent.has(element.faculty)) {
        mapStudent.set(element.faculty, mapStudent.get(element.faculty) + 1);
    }
    else {
        mapStudent.set(element.faculty, 1);
    }
    if (mapCourse.has(element.course)) {
        mapCourse.set(element.course, mapCourse.get(element.course) + 1);
    }
    else {
        mapCourse.set(element.course, 1);
    }
});
for (const [key, value] of mapStudent) {
    document.write(`${key} - ${value} <br>`);
}
for (const [key, value] of mapCourse) {
    document.write(`Course:${key} - ${value} <br>`);
}
document.write(`<hr>`);
// =================================================================================================================
// Задача 5. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// Заокруглити вверх значення та підрахувати кількість різних показів.
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
const tempMap = new Map();
for (const temperature of temperatures) {
    if (tempMap.has(Math.ceil(temperature))) {
        tempMap.set(Math.ceil(temperature), tempMap.get(Math.ceil(temperature)) + 1);
    }
    else {
        tempMap.set(Math.ceil(temperature), 1);
    }
}
for (const [key, value] of tempMap) {
    document.write(`Temp:${key}- ${value}<br>`);
}
document.write(`Кількість різних показів = ${tempMap.size}`);
// console.log(tempMap.size);
document.write(`<hr>`);
// =============================================================================================================
// Задача 6. Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
const historyClub = [
    "Ivanov",
    "Petrov",
    "Bokalo",
    "Stasiv",
    "Strelecky",
];
const mathematicsClub = [
    "Stasiv",
    "Bilous",
    "Bokalo",
    "Skirchuk",
    "Shevchenko",
    "Mykyta",
];
const setHistory = new Set(historyClub);
console.log(setHistory.size);
const setMathematics = new Set(mathematicsClub);
console.log(setMathematics.size);
// const atTwoClub = historyClub.filter(student => setMathematics.has(student)
// )
const atTwoClub = setHistory.intersection(setMathematics);
for (const student of atTwoClub) {
    document.write(`Відвідують 2 гуртка:${student}<br>`);
}
const totalStudent = setHistory.union(setMathematics);
document.write(`Відвідують хоча б один гурток:${totalStudent.size} студентів`);
// console.log(setHistory.intersection(setMathematics))
// console.log(setHistory.union(setMathematics));
// console.log(atTwoClub);
//# sourceMappingURL=task4.js.map