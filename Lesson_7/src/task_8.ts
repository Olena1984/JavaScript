// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>


function displayBanner(image:string, title:string, link:string) {
    return `<div class="cartoon"><h2>${title}</h2><a href="${link}"><img src="${image}"></a></div>`
}
const image = `../Lesson_7/images/bunny.png`;
const title = `Bugs Bunny cartoon`
const link = `https://www.youtube.com/playlist?list=PLlSDlfHTdFJVvHlUir1PjvaGA4fG6Elbl`
const resultDisplay = displayBanner(image, title, link)
document.write(` ${resultDisplay}`)








// function displayBanner(image:string, title:string, link:string) {
//     return `<div class="cartoon"><h2>${title}</h2><a href="${link}">${image}</a></div>`
// }
// const image = `<img src="../Lesson_7/images/1.png">`;
// const title = `Bugs Bunny cartoon`
// const link = `https://www.youtube.com/playlist?list=PLlSDlfHTdFJVvHlUir1PjvaGA4fG6Elbl`
// const resultDisplay = displayBanner(image, title, link)
// document.write(` ${resultDisplay}`)
