"use strict";
//  Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
function displayImage(img1, img2, img3, img4) {
    const randImgIndex = 1 + Math.floor(Math.random() * (4 - 1 + 1));
    if (randImgIndex === 1)
        return img1;
    if (randImgIndex === 2)
        return img2;
    if (randImgIndex === 3)
        return img3;
    return img4;
}
const img1 = `<h2>Зображення 1</h2><img src="../Lesson_7/images/1.png">`;
const img2 = `<h2>Зображення 2</h2><img src="../Lesson_7/images/2.png">`;
const img3 = `<h2>Зображення 3</h2><img src="../Lesson_7/images/3.png">`;
const img4 = `<h2>Зображення 4</h2><img src="../Lesson_7/images/4.png">`;
const img = displayImage(img1, img2, img3, img4);
document.write(`<div class="images">${img}</div>`);
// ----- Другий варіант --------------
// function getImage():string {
//   const randImgIndex = 1 + Math.floor(Math.random() * (4 - 1 + 1));
//   return `<h2>Зображення ${randImgIndex}</h2><img src="../Lesson_7/images/${randImgIndex}.png">`;
// }
// const img = getImage();
// document.write(`<div class="images">${img}</div>`);
//# sourceMappingURL=task_7.js.map