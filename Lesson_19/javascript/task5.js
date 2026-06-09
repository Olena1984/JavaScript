"use strict";
//  Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
const parentBlock = document.getElementById("shop");
parentBlock.onclick = function (event) {
    const imgEl = event.target;
    if (imgEl.tagName === "IMG") {
        imgEl.classList.toggle("border");
    }
};
//# sourceMappingURL=task5.js.map