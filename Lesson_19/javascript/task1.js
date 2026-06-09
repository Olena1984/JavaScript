"use strict";
// Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
// function changeColor(this:HTMLElement) { 
//     const div = this
//     let nextEl = div.nextElementSibling  as HTMLElement
//     while (nextEl) {
//         nextEl.style.backgroundColor = 'red'
//         nextEl = nextEl.nextElementSibling as HTMLElement
//     }
// }
// const allDiv = document.querySelectorAll('div')
// for (const div of allDiv) {
//    div.onclick = changeColor.bind(div)
// }
// Прослуховувач події 
// function changeColor(event:Event) {
//    let div = event.target as HTMLElement
//     if (div.tagName === "DIV") {
//        let nextDivEl = div.nextElementSibling as HTMLElement
//        while (nextDivEl) {
//         nextDivEl.style.backgroundColor ='red'
//         nextDivEl = nextDivEl.nextElementSibling as HTMLElement
//        }
//     }
// }
// const container = document.getElementById('container') as HTMLBaseElement
// container.addEventListener("click", changeColor)
// делегування події
const container = document.getElementById('container');
container.onclick = function (event) {
    const divEl = event.target;
    if (divEl.tagName === "DIV") {
        let nextDivEl = divEl.nextElementSibling;
        while (nextDivEl) {
            nextDivEl.style.backgroundColor = 'red';
            nextDivEl = nextDivEl.nextElementSibling;
        }
    }
};
//# sourceMappingURL=task1.js.map