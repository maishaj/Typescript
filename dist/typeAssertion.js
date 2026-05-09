"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "Mezba";
// Example 01
const KgToGmConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted Output is ${Number(value) * 1000}`;
    }
};
const result1 = KgToGmConverter(2);
const result2 = KgToGmConverter("2 KG");
console.log(result1);
console.log(result2);
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=typeAssertion.js.map