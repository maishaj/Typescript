//Type Alias

//Objects

 type User={
    id:number,
    name:{
        firstName:string,
        lastName:string
    },
    gender:'male' | 'female', //or
    contactNo:string,
    address:{
        division:string,
        city:string
    }
 }

const user1:User={
    id:123,
    name:{
        firstName:"Mr",
        lastName:"X"
    },
    gender:"male",
    contactNo:"0177",
    address:{
        division:"Ctg",
        city:"Ctg"
    }
}

const user2:User={
    id:124,
    name:{
        firstName:"Mr",
        lastName:"Y"
    },
    gender:"male",
    contactNo:"0188",
    address:{
        division:"Dhaka",
        city:"Gazipur"
    }
}

//Boolean
type isAdmin=boolean;
const admin:isAdmin=true;

//String
type Name=string;
const myName:Name="Maisha"

//Function
type AddFunc=(num1:number,num2:number)=>number
const add:AddFunc=(num1,num2)=>num1+num2;
 



