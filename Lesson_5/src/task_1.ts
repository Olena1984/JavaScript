// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.


document.write(`<ul>`) 
for (let i = 0; i < 10; i++) {
    let userNum = parseInt(prompt(`Enter 10 numbers in the range from 1-100 ${i}`,'5')!)
    document.write(`<li>${userNum}</li>`)      
}
document.write(`</ul>`)