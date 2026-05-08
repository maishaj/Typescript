let anything: any;
anything = "Mezba";

// Example 01
const KgToGmConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted Output is ${Number(value) * 1000}`;
  }
};

const result1 = KgToGmConverter(2) as number;
const result2 = KgToGmConverter("2 KG") as string;
console.log(result1);
console.log(result2);

//Example 02
type CustomError = {
  message: string;
};
try {
} catch (err) {
  console.log((err as CustomError).message);
}
