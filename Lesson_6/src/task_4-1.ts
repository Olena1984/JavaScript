/*  З клавіатури вводяться два числа N i M (N<M). Вивести на екран числа
N---M
N+1 --- M-1
N+2 --- M-2
N+3 --- M-3
. . . . . . 
Виведення завершити коли число справа стане меншим за число зліва.
 */

let N = parseInt(prompt('Enter "N" number', "4")!);
let M = parseInt(prompt('Enter "M" number', "10")!);
while (N <= M) {
    document.write(`${N} --- ${M}<br>`);
    N++;
    M--;    
}
