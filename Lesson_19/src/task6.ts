// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

//  <div class="items" >
//     <div class="item">
//         <p>Ольга Харлан</p>
//         <button>
//             <img src="images/arrowGreen.png" alt="arrow right">
//         </button>
//     </div>
// </div>

const athletesList: string[] = [
  "Ярослава Магучіх",
  "Жан Беленюк",
  "Еліна Світоліна",
  "Василь Ломаченко",
  "Олександр Усик",
  "Марта Костюк",
  "Ольга Харлан",
];

const parentBlockList = document.querySelector(".items") as HTMLBaseElement;
const selectedAthlete = document.querySelector(".checked") as HTMLBaseElement;

function createAthletesList(athletesList: string[]) {
  for (let i = 0; i < athletesList.length; i++) {
    const divItem = document.createElement("div");
    divItem.classList.add("item");
    // ======================
    const pEl = document.createElement("p");
    pEl.innerText = athletesList[i];
    divItem.append(pEl)
    // ========================
    const btnEl = document.createElement("button");
    const imgEl = document.createElement("img");
    imgEl.src ="images/arrowGreen.png"
    btnEl.append(imgEl)
    divItem.append(btnEl)
    parentBlockList.append(divItem);
  }
}
const list = createAthletesList(athletesList);

parentBlockList.onclick = function (event: Event) {
  const btnEl = event.target as HTMLButtonElement;
  if (btnEl.tagName === "IMG") {
    const divEl = btnEl.closest(".item") as HTMLElement;
    let btn = divEl.querySelector("img") as HTMLImageElement;
    btn.src = "images/arrowRed.png";
    console.log(btn);

    selectedAthlete.append(divEl);
  }
};

selectedAthlete.onclick = function (event: Event) {
  const btnEl = event.target as HTMLButtonElement;
  if (btnEl.tagName === "IMG") {
    const divEl = btnEl.closest(".item") as HTMLElement;
    let btn = divEl.querySelector("img") as HTMLImageElement;
    btn.src = "images/arrowGreen.png";
    console.log(btn);

    parentBlockList.append(divEl);
  }
};
