// Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

/* 
<ol>
    <li></li>
</ol>

*/
// let listContainer = document.getElementById("list") as HTMLBaseElement;

const minEl: number = 1;
const maxEl: number = 100;
const maxElList: number = 10;
const numList: number = 5;

function createList() {
    const listContainer = document.getElementById("list") as HTMLBaseElement;
  for (let ol = 0; ol < numList; ol++) {
    const olEl = document.createElement("ol");
    olEl.classList.add("items")
    //  olEl.className = "items"
    const randNum = Math.floor(minEl + Math.random()*(maxElList-minEl+1))
    for (let li = 0; li < randNum; li++) {
      const liEl = document.createElement("li");
      liEl.innerText = Math.floor(minEl + Math.random() * (maxEl - minEl + 1)).toString();
      olEl.append(liEl);
    }
    listContainer.append(olEl);
  }
}
function changeColor() {
    const ol = document.getElementsByClassName('items')
    for (const elements of ol) {
        const listElements = elements as HTMLElement
        if (listElements.children.length %2 !==0) {
            listElements.style.backgroundColor = "red"
        }
        else{
            listElements.style.backgroundColor = "green"
        }
    }
    btn.classList.add("click")
    
}
const btn = document.getElementById('button') as HTMLButtonElement
btn.onclick = changeColor
const olList = createList()
console.log(olList);

