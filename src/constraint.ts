
type student={id:number, name:string}

const addStudentToCourse=<T extends student>(studentInfo:T)=>{
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

const student3={
    hasWatch:true
}

const result1=addStudentToCourse(student1);
console.log(result1);
const result2=addStudentToCourse(student2);
console.log(result2);
//const result3=addStudentToCourse(student3);
//console.log(result3);