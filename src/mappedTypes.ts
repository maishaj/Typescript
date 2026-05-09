//Example 01

const arrayOfNum:number[]=[1,4,6];
const arrayOfString:string[]=["1","4","6"];

const arrayOfStringUsingMap:string[]=arrayOfNum.map((num)=>num.toString());
console.log(arrayOfStringUsingMap);


//Example 02

type AreaOfNum={
    height:number,
    width:number
}

//type heightt=AreaOfNum["height"];

type Area<T>={
    [key in keyof T]:T[key];

    //key>>height>>string
    //key>>width>>number
}

/*
   T      >> { height:string, width:string }
   key    >> height,width
   T[key] >> T[height]=string, T[width]=number
*/


const area1:Area<{ height:string, width:number}>={
    height:"50",
    width:20
}
const area2:Area<{ height:boolean, width:number}>={
    height:false,
    width:20
}

