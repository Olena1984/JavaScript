/* 
Створити службове авто (водій, марка, номер). Створити клас
таким чином, щоб можна було створити тільки один екземпляр
цього класу.
*/

class Car {
    static companyCar:Car|null
    public name:string ='' 
    public brand:string =''
    public carNumber:string =''
    constructor(name:string, brand:string, carNumber:string) {
     if (Car.companyCar) return Car.companyCar
     
        this.name =name
        this.brand = brand
        this.carNumber = carNumber

        Car.companyCar = this
    
    }
    toString(){
        return `Службове авто:<br> водій - ${this.name}<br> марка- ${this.brand}<br> номерний знак- ${this.carNumber}`
    }

}

const result = new Car('Stasiv Petro', 'Skoda', 'ВС2345АА')
document.write(`<p> ${result.toString()}</p>`)
const result2 = new Car('Onysko Bohdan', 'Renault', 'ВС4222АА')
document.write(`<p> ${result.toString()}</p>`)
const result3 = new Car('Onysko Olena', 'Kia', 'ВС5555АB')
document.write(`<p> ${result.toString()}</p>`)