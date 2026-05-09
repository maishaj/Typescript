"use strict";
// keyOf : type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myvehicle = "car";
const vechicle = "cng";
const user1 = {
    id: 222,
    name: "Mezba",
    address: {
        city: "Ctg"
    },
};
const product = {
    brand: "hp"
};
// const myId=user1["id"];
// const myName=user1["name"];
// const address=user1["address"];
// console.log({myId,myName,address});
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result1 = getPropertyFromObj(user1, "address");
const result2 = getPropertyFromObj(product, "brand");
console.log({ result1, result2 });
//# sourceMappingURL=keyOfConstraint.js.map