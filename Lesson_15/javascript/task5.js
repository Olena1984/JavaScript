"use strict";
class Banner {
    banner;
    constructor() {
        this.banner = [
            {
                image: "images/smile1.png",
                link: "https://www.youtube.com/watch?v=G58IVTuAVo0",
            },
            {
                image: "images/smile2.png",
                link: "https://uk.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B9%D0%BA",
            },
            {
                image: "images/smile3.png",
                link: "https://uk.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2",
            },
            {
                image: "images/smile4.png",
                link: "https://uk.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2",
            },
            {
                image: "images/smile5.png",
                link: "https://uk.wikipedia.org/wiki/%D0%92%D0%B4%D1%8F%D1%87%D0%BD%D1%96%D1%81%D1%82%D1%8C",
            },
        ];
    }
    getRandomImage() {
        const randIndex = Math.floor(Math.random() * this.banner.length);
        return this.banner[randIndex];
    }
    printResult() {
        const resBanner = this.getRandomImage();
        return `<div class="image"><a href="${resBanner.link}"><img src="${resBanner.image}" alt="image"><br><p >${resBanner.link}</p></a></div>`;
    }
}
const bannerRes = new Banner();
console.log(bannerRes.getRandomImage());
document.write(`${bannerRes.printResult()}`);
//# sourceMappingURL=task5.js.map