"use strict";
// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.
//  <div class="items" >
//     <div class="item">
//         <p>Ольга Харлан</p>
//         <button>
//             <img src="images/arrowGreen.png" alt="arrow right">
//         </button>
//     </div>
// </div>
const athletesList = [
    "Ярослава Магучіх",
    "Жан Беленюк",
    "Еліна Світоліна",
    "Василь Ломаченко",
    "Олександр Усик",
    "Марта Костюк",
    "Ольга Харлан",
];
const parentBlockList = document.querySelector(".items");
const selectedAthlete = document.querySelector(".checked");
function createAthletesList(athletesList) {
    for (let i = 0; i < athletesList.length; i++) {
        const divItem = document.createElement("div");
        divItem.classList.add("item");
        // ======================
        const pEl = document.createElement("p");
        pEl.innerText = athletesList[i];
        divItem.append(pEl);
        // ========================
        const btnEl = document.createElement("button");
        const imgEl = document.createElement("img");
        imgEl.src = "images/arrowGreen.png";
        btnEl.append(imgEl);
        divItem.append(btnEl);
        parentBlockList.append(divItem);
    }
}
const list = createAthletesList(athletesList);
parentBlockList.onclick = function (event) {
    const btnEl = event.target;
    if (btnEl.tagName === "IMG") {
        const divEl = btnEl.closest(".item");
        let btn = divEl.querySelector("img");
        btn.src = "images/arrowRed.png";
        console.log(btn);
        selectedAthlete.append(divEl);
    }
};
selectedAthlete.onclick = function (event) {
    const btnEl = event.target;
    if (btnEl.tagName === "IMG") {
        const divEl = btnEl.closest(".item");
        let btn = divEl.querySelector("img");
        btn.src = "images/arrowGreen.png";
        console.log(btn);
        parentBlockList.append(divEl);
    }
};
//# sourceMappingURL=task6.js.map