"use strict";
// Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.
class Star {
    minSize;
    maxSize;
    step;
    star;
    initialSize;
    constructor(minSize, maxSize, step) {
        this.minSize = minSize;
        this.maxSize = maxSize;
        this.step = step;
        this.star = this.createStar();
        this.initialSize = this.minSize;
        this.step = this.step + Math.random() * 1;
    }
    createStar() {
        const divEl = document.createElement("div");
        divEl.classList.add("star");
        const imageEl = document.createElement("img");
        imageEl.src = "images/star.png";
        imageEl.style.width = String(`${this.minSize}%`);
        imageEl.style.filter =
            "brightness(0) saturate(100%) invert(73%) sepia(95%) saturate(534%) hue-rotate(3deg) brightness(112%) contrast(88%)";
        divEl.append(imageEl);
        return divEl;
    }
    starPosition() {
        const newTopPosition = Math.floor(Math.random() * 100);
        const newLeftPosition = Math.floor(Math.random() * 100);
        this.star.style.top = String(`${newTopPosition}%`);
        this.star.style.left = String(`${newLeftPosition}%`);
    }
    increaseStar() {
        setInterval(() => {
            const newSize = this.minSize + this.step;
            this.minSize = newSize;
            this.star.style.width = (`${this.minSize}%`);
            if (parseInt(this.star.style.width) > this.maxSize) {
                this.minSize = this.initialSize;
                this.star.style.width = (`${this.initialSize}%`);
                this.starPosition();
            }
        }, 16);
    }
    render() {
        const container = document.querySelector(".starsky");
        if (container)
            container.append(this.star);
        this.starPosition();
        this.increaseStar();
    }
}
window.onload = function () {
    for (let star = 0; star < 50; star++) {
        const star = new Star(8, 20, 0.1);
        star.render();
    }
};
//# sourceMappingURL=task1.js.map