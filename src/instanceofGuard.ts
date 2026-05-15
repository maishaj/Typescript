class Person{
    name:string

    constructor(name:string){
        this.name=name;
    }

    getSleep(hours:number){
        console.log(`${this.name} sleeps ${hours} hours daily!`);
    }
}

class Student extends Person{
    constructor(name:string){
        super(name);
    }

    doStudy(hours:number){
        console.log(`${this.name} studies ${hours} hours daily!`);
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name);
    }
    takeClass(hours:number){
        console.log(`${this.name} takes ${hours} of classes daily`);
    }
}

//function guard
const isStudent=(user:Person)=>{
    return user instanceof Student;
}

const isTeacher=(user:Person)=>{
    return user instanceof Teacher;
}

const getUserInfo=(user:Person)=>{
    if(isStudent(user)){
        user.doStudy(5);
    }
    else if(user instanceof Teacher){
        user.takeClass(7);
    }
    else{
        user.getSleep(13);
    }
}

const student1=new Student("Mr.Student");
const teacher1=new Teacher("Mr.Teacher");

getUserInfo(student1);
