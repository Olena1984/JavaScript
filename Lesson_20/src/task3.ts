// На формі вводять 7 числових значень (вік, зріст, вага, заробітна плата, стаж, номер відділу, порядковий номер). Додати подію обробки події click на форму і якщо клік на внутрішньому input, то автоматично замінювати значення його на 0. Використати делегування


class Form {
    constructor(public labelTitle:string, public defaultValue:number) { 
    }
    createForm(){
        const divEl = document.createElement('div')
        divEl.className = 'form'
        const labelEl = document.createElement('label')
        labelEl.innerText = (`${this.labelTitle}: `)
        const inputEl = document.createElement('input')
        inputEl.type = 'number'
        inputEl.value =(`${this.defaultValue}`)

        divEl.append(labelEl)
        divEl.append(inputEl)
        return divEl
    }
    static changeInputValue(){
        const targetDiv = document.querySelector('.forms-container') as HTMLDivElement
        targetDiv.onclick = function (event:Event) {
            const inputEl = event.target as HTMLInputElement
            if (inputEl.tagName === 'INPUT') {
                inputEl.value = '0'
            }
        }
    }
    render(){
        const container = document.querySelector('.forms-container')
        if (container) container.append(this.createForm())
       
    }
}
window.onload = function () {
    const labelName:string[] = ['вік','зріст', 'вага', 'заробітна плата', 'стаж', 'номер відділу', 'порядковий номер']
    const numbers:number[]=[25, 170, 60, 50000, 20, 345, 876655]
    for (let f = 0; f < 7; f++) {
        const form = new Form(labelName[f], numbers[f])
        form.render() 
    }
    Form.changeInputValue()
}
