"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Normal Function
function addNormal(num1, num2) {
    return num1 + num2;
}
addNormal(2, 2);
//Arrow Function
const addArrow = (num1, num2) => num1 + num2;
addArrow(2, 2);
//Object=>Function=>is called Method
const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(valuee) {
        const totalBalance = this.balance + valuee;
        return totalBalance;
    },
};
poorUser.addBalance(10000);
//Loop=>Callback Function
const arr = [1, 2, 3, 4, 5];
const sqrArr = arr.map((element) => element * element);
console.log(sqrArr);
//# sourceMappingURL=function.js.map