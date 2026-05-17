/* 
Розробити клас «Керівник танців»
Поля
Масив імен хлопців
Масив імен дівчат
Методи
Метод випадкового вибору імені хлопця
Метод випадкового вибору імені дівчини
Метод виведення пари для танців
Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

*/

class DanceTeacher {
  boys: string[];
  girls: string[];
  constructor() {
    this.boys = ['Mark','Alex','Theodore','Mathew'];
    this.girls = ['Emily', 'Eva','Sofia','Margo'];
  }
  // Метод випадкового вибору імені хлопця
  getBoyName(){
    const randIndex = Math.floor(Math.random()*this.boys.length)
    return this.boys[randIndex]
  }
  // Метод випадкового вибору імені дівчини
  getGirlsName(){
    const randIndex = Math.floor(Math.random()*this.girls.length)
    return this.girls[randIndex]
  }
  // Метод виведення пари для танців
  getCoupleForDancing(){
    const boy = this.getBoyName()
    const girl = this.getGirlsName()
    return`${boy} + ${girl}`
  }
  // Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
  displayNewCouple(){
    setInterval(() => {
    //    console.log(this.getCoupleForDancing())
    document.write(`${this.getCoupleForDancing()}<br>`)
    }, 5000);
  }
}
const couple = new DanceTeacher()
// console.log(couple.getCoupleForDancing());
// console.log(couple.displayNewCouple());
couple.displayNewCouple();



