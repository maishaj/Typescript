//Example 01

type Product={
    id:number,
    name:string,
    price:string,
    stock:number,
    color?:string
}

type ProductSummary=Pick<Product, "id"|"name"|"price">;

type ProductWithoutStock=Omit<Product,"stock">;

type ProductWithColor=Required<Product>;
const product:ProductWithColor={
    id:123,
    name:"X",
    price:"100",
    stock:20,
    color:"Black"
}

type OptionProduct=Partial<Product>;

type ProductReadOnly=Readonly<Product>;

const emptyObj: Record<string,unknown>={};
const product1={
    id:222,
    name:"mouse",
    price:false
}


