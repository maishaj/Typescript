const createArrayWithString=(value:string)=>[value];

const createArrayWithNumber=(value:number)=>[value];

const createArrayWithUserObject=(value:{id:number,name:string})=>{
    return [value];
}

const arrString= createArrayWithString("Apple");
const arrNum=createArrayWithNumber(222);
const arrObj=createArrayWithUserObject({
    id:123,
    name:"Next Level"
});


// Generics with Function

const createArrayWithGeneric=<T>(value:T)=>{
    return [value];
}

const arrString1= createArrayWithGeneric("Apple");
const arrNum2=createArrayWithGeneric(222);
const arrObj2=createArrayWithGeneric({
    id:123,
    name:"Next Level"
});

//Generics with Tuples

const createArrayWithTuple=(param1:string,param2:string)=>[param1,param2];

const createArrayOfTuplesWithGeneric=<X,Y>(param1:X,param2:Y)=>[param1,param2];

const res1=createArrayOfTuplesWithGeneric("Mezba",false);
const res2=createArrayOfTuplesWithGeneric(222,{name:"Mezba"});

//Example of Generics

const addStudentToCourse=<T>(studentInfo:T)=>{
    return {
        course:"Next Level",
        ...studentInfo
    }
}

const student1={
    id:123,
    name:"Mezba",
    hasPen:true
}

const student2={
    id:321,
    name:"Jhankar Mahbub",
    hasCar:true,
    isMarried:true
}

const result1=addStudentToCourse(student1);
console.log(result1);
const result2=addStudentToCourse(student2);
console.log(result2);