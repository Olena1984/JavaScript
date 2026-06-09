//  Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)


const parentBlock = document.getElementById("shop") as HTMLBaseElement 
parentBlock.onclick = function (event:Event) {
    const imgEl = event.target as HTMLImageElement
    if (imgEl.tagName === "IMG") {
        imgEl.classList.toggle("border")        
    }
}

