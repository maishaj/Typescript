//Normal Function
function addNormal (num1:number,num2:number):number
{
    return num1+num2;
}
addNormal(2,2);

//Arrow Function
const addArrow=(num1:number,num2:number):number=>num1+num2;
addArrow(2,2);

//Object=>Function=>is called Method
const poorUser={
    name:"Mezba",
    balance:0,
    addBalance(valuee:number):number{ //last ":number" is return type
       const totalBalance=this.balance+valuee;
       return totalBalance;
    },
}
poorUser.addBalance(10000);

//Loop=>Callback Function
const arr:number[]=[1,2,3,4,5];
const sqrArr=arr.map((element:number):number=>element*element);
console.log(sqrArr);




