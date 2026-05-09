"use strict";
// ?:  Ternary Operator- Decision Making
// ??: Nullish Coalescing- works based on null/undefined
// ?.  Optional Chaining
Object.defineProperty(exports, "__esModule", { value: true });
// ***Ternary Operator***
const Eligible = (age) => {
    const result = age >= 21 ? "You are eligible!" : "You are not eligible";
    return result;
};
const p = Eligible(21);
console.log(p);
//***Nullish Coalescing Operator***
// const userTheme=undefined;
const userTheme = null;
// const userTheme="Dark Theme";
const selectedTheme = userTheme ?? "Light Theme";
console.log(selectedTheme);
//Example with ternary and Nullish
const isAuthenticated = null;
const resultwithTernary = isAuthenticated ? isAuthenticated : "You are a guest";
const resultwithNullish = isAuthenticated ?? "You are a guest";
console.log(resultwithTernary);
console.log(resultwithNullish);
//***Optional Chaining***
const user = {
    address: {
        city: "Dhaka",
        town: "Banani",
    }
};
const code = user?.address?.postalCode;
console.log(code);
//# sourceMappingURL=TernaryNullishChaining.js.map