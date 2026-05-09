"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Object Destructuring
const user = {
    id: 123,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "Forhan"
    },
    gender: "Male",
    favColor: "Black"
};
// const myFavColor=user.favColor;
// const myMiddleName=user.name.middleName;
const { favColor } = user;
console.log(favColor);
const { favColor: myFav, name: { middleName: myNameMiddle } } = user;
console.log(myFav);
console.log(myNameMiddle);
//Array Destructuring
const friends = ["Karim", "Rahim", "Mahim"];
//const bestfriend=friends[1];
//const [A,bestfriend,C]=friends;
const [, , C] = friends;
console.log(C);
//# sourceMappingURL=destructuring.js.map