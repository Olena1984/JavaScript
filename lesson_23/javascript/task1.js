"use strict";
// Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….   MTC, 096…  Kyivstar, ….)
class PhoneNumber {
    phoneNumber;
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    [Symbol.toPrimitive](hint) {
        let result;
        switch (hint) {
            case "string":
                result = this.operatorDefinition();
                break;
            case "number":
                result = this.phoneNumber;
                break;
            default:
                result = undefined;
                break;
        }
        return result;
    }
    operatorDefinition() {
        // 	067, 068, 096, 097, 098, 077 - kyivstar
        // 050, 066, 095, 099 та 075 - Vodafon
        // 063, 093,073 -Lifecell
        const regexKyivstar = /(\+(380))?(6[78]\d{7}|9[678]\d{7}|77\d{7})/;
        const regexLife = /(\+(380))?(63\d{7}|93\d{7}|73\d{7})/;
        const regexVodafon = /(\+(380))?(50\d{7}|66\d{7}|9[59]\d{7}|75\d{7})/;
        const checkPhoneK = this.phoneNumber.match(regexKyivstar);
        const checkPhoneV = this.phoneNumber.match(regexVodafon);
        const checkPhoneL = this.phoneNumber.match(regexLife);
        if (checkPhoneK)
            return "Оператор Київстар";
        if (checkPhoneV)
            return "Оператор Водафон";
        if (checkPhoneL)
            return "Оператор Лайфсел";
        return "Оператор невідомий";
    }
}
// const phoneNumber:string = "+380973452130"
const phoneNumber = "+380994771290";
const phone = new PhoneNumber(phoneNumber);
document.write(` ${phone}`);
document.write(`<br>`);
document.write(` ${+phone}`);
document.write(`<br>`);
document.write(`${phone + ""}`);
//# sourceMappingURL=task1.js.map