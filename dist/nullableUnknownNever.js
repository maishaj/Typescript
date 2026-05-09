"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// nullable
const getUser = (input) => {
    if (input) {
        console.log(`From DB: ${input}`);
    }
    else {
        console.log("From DB: All Users");
    }
};
getUser("Maisha");
//unknown
const discountCalculator = (input) => {
    if (typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    }
    else if (typeof input === "string") {
        const [discountedPrice] = input.split(" "); //destructuring the output arr after splitting
        console.log(Number(discountedPrice) * 0.1);
    }
    else {
        console.log("Wrong Input");
    }
};
discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);
//void
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("Error.....");
//# sourceMappingURL=nullableUnknownNever.js.map