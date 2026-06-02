"use strict";
// Створити клас Нагадувач. Кожні вказані кількості секунд
// (використати setInterval) програма нагадує про якусь подію
// (це просто текст) і також виводиться порядковий номер
// скільки раз вже нагадування було. Зробити так, щоб неможна
// було зробити одночасно декілька об’єктів-нагадувачів. Методи
// зупинки таймера, метод зміни повідомлення без зупинки
// таймера.
/*
1. кількість секунд для нагадування
2. вивід номера нагадування
3. перелік повідомлень
4. зупипка таймера
5. зміна повідомлень
*/
class Tickler {
    seconds;
    message;
    timer;
    static countEvent = 0;
    static tickler;
    constructor(seconds, message) {
        this.seconds = seconds;
        this.message = message;
        if (Tickler.tickler)
            return Tickler.tickler;
        this.seconds = seconds;
        this.message = message;
        Tickler.tickler = this;
    }
    runEvent() {
        this.timer = setInterval(() => {
            Tickler.countEvent += 1;
            // document.write(`<p class ="message">${this.message} - ${Tickler.countEvent}</p>`)
            const mess = document.createElement("p");
            document.body.append(mess);
            mess.innerText += `${this.message} - ${Tickler.countEvent}`;
            mess.style.color = "red";
        }, this.seconds);
    }
    changeMessage(newMes) {
        this.message = newMes;
    }
    stopInterval() {
        clearInterval(this.timer);
        const mess = document.createElement("p");
        document.body.append(mess);
        mess.innerText += `Done`;
        mess.style.color = "green";
        // document.write(`<p>Stop</p>`)
    }
}
const eventToDo = "pack things for a trip";
const tickler = new Tickler(2000, eventToDo);
tickler.runEvent();
setTimeout(() => {
    tickler.changeMessage("check your trunk");
}, 8000);
setTimeout(() => {
    tickler.stopInterval();
}, 15000);
// const tickler1 = new Tickler(2000, 'print')
// tickler1.runEvent()
// setTimeout(() => {
//   tickler.changeMessage('check your trunk')
// },8000);
// setTimeout(() => {
//     tickler1.stopInterval()
// },15000);
// console.log(tickler===tickler1);
//# sourceMappingURL=task3.js.map