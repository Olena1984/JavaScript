//  Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент

class FormInput {
    inputElement:HTMLDivElement
    constructor() {
        this.inputElement = this.createInput()
    }
    createInput(){
        const divEl = document.createElement('div')
        divEl.className = ('search')
        const labelEl = document.createElement('label')
        labelEl.innerText =("Пошук працівника:")
        const inputEl = document.createElement('input')
        inputEl.type ='text'
        inputEl.placeholder ="Я шукаю..."
        divEl.append(labelEl)
        divEl.append(inputEl)
        return divEl
    }

    render(){
        const container = document.querySelector('.search-container') as HTMLDivElement
        if (container) container.append(this.inputElement) 
    }
}

class Lists {
    listElement:HTMLUListElement
    constructor(public nameList:string[]) {
        this.listElement = this.createList()
    }
    createList(){
        const ulEl = document.createElement('ul')
        ulEl.className =("list-items")
        this.nameList.forEach((element)=>{
        const liEl = document.createElement('li')
        liEl.innerText =String(element)
        ulEl.append(liEl)
        })
       
        return ulEl
    }
    render(){
        const container = document.querySelector('.search-container')
        if (container) container.append(this.listElement)

    }
}
class Search {
    constructor(public inputForm:FormInput, public list:Lists) {
        
    }
    searchMatch(){
        const inputEl = this.inputForm.inputElement.querySelector('input') as HTMLInputElement
        inputEl.oninput =  (oninput:Event)=> {
            const targetEl = oninput.target as HTMLInputElement
            const enteredValue = targetEl.value.toLowerCase().trim()
             const listEl = this.list.listElement.querySelectorAll('li')
            if (!enteredValue) {
                listEl.forEach((liElement)=>{
                    liElement.classList.remove('hide') 
                })
                return}
           
            listEl.forEach((liElement)=>{
                liElement.classList.add('hide')
                if (liElement.innerText.toLowerCase().includes(enteredValue)) {
                    liElement.classList.remove('hide') 
                }  
            })
        }
    }
    render(){
        this.searchMatch()
    }
}

const list:string[]=["Бокало М.С","Онисько Б.Б", "Степанців І.Ю.", "Гончаренко Г.О.","Бокало В.О.", "Онищенко К.Г"]
window.onload = function () {
    const formInput = new FormInput()
    formInput.render()
    const nameList = new Lists(list)
    nameList.render()
    const search = new Search(formInput, nameList)
    search.render()
}