type User={
    name:string,
    age:number
};

type Role={
    role:"admin" | "user"
}


//***Interface: Object type- array,object,function***
//**Interface with Object**
interface IUser{
    name:string,
    age:number
}

//Type alias
type UserWithRole=User & Role;

//Interface
interface IUserWithRole extends IUser{
    role:"admin" | "user";
}

//Interface
const user1:IUserWithRole={
    name:"Mr.X",
    age:100,
    role:"admin"
}

const user2:IUser={
    name:"Mr.Y",
    age:102
}

type isAdmin=boolean;
const admin:isAdmin=false;


//**Interface with function**

//Type alias
type Add=(num1:number,num2:number)=>number
const add:Add=(num1,num2)=>num1+num2;

//Interface
interface IAdd{
    (num1:number,num2:number):number
}
const Sum:IAdd=(num1,num2)=>num1+num2;


//**Interface with Array**

//Type alias
type friends=string[];
const Myfriends:friends=["A","B","C"];

//Interface
interface Ifriends{
    [index:number]:string
}
const MySchoolFriends:Ifriends=["A","B","C"];


