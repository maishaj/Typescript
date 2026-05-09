// keyOf : type operator

//Example 01
type RichPeoplesVehicle={
    car:string,
    bike:string,
    cng:string
};

type MyVehicle1="bike" | "car" | "cng";
type MyVehicle2=keyof RichPeoplesVehicle;

const myvehicle:MyVehicle1="car";
const vechicle:MyVehicle2="cng";


//Example 02


type User={
    id:number,
    name:string,
    address:{
        city:string
    }
}

const user1:User={
    id:222,
    name:"Mezba",
    address:{
        city:"Ctg"
    },
}

const product={
    brand:"hp"
}

// const myId=user1["id"];
// const myName=user1["name"];
// const address=user1["address"];
// console.log({myId,myName,address});

const getPropertyFromObj=<X>(obj:X, key: keyof X)=>{
    return obj[key];
}
const result1=getPropertyFromObj(user1,"address");
const result2=getPropertyFromObj(product,"brand");
console.log({result1,result2});

