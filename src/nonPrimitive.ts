//Array, Object, Tuples

//Array
let bazarlist:string[]=["eggs","milk","sugar"];
let mixedArr:(string|number)[]=["eggs",12,"milk",1,"sugar",2]
//mixedArr.push(true);

//Tuples
let coordinates:[number,number]=[20,30];
let couple:[string,string]=['male','female'];
let mezbaNameAndRoll:[string,number]=["Mezba",12];
let destination:[string,string,number]=["Dhaka","Ctg",3];
destination[2]=6;
console.log(destination);

//Object
const user:{
    organization:"Programming Hero"; //Literal Type
    readonly org:"XY School"; // Access Modifier
    firstName:string;
    middleName?:string; //Optional Type
    lastName:string
    isMarried:boolean;
}={
    organization:"Programming Hero",
    org:"XY School",
    firstName:"Mezbaul",
    //middleName:"Abedin",
    lastName:"Forhan",
    isMarried:true,
}

console.log(user.firstName);
//user.organization="Hello";
//user.org="Hello";




