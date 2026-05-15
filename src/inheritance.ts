//Class Parent 
class parent{
    name:string
    age:number
    address:string

    constructor(name:string,age:number,address:string){
       this.name=name
       this.age=age
       this.address=address
    }

    getSleep(hours:number){
        console.log(`${this.name} sleeps ${hours} hours`);
    }
}

//Class 01
class student extends parent{
    //automatically constructor works, since it has no extra/own property
}

const student1=new student("Maisha",18,"Bangladesh");
student1.getSleep(5);


//Class 02
class teacher extends parent{

    designation:string

    constructor(name:string,age:number,address:string,designation:string){

       super(name,age,address);

       this.designation=designation
    }

    getSleep(hours:number){
        console.log(`${this.name} sleeps ${hours} hours`);
    }
    
    //own method
    takeClass(classhours:number){
        console.log(`{this.name} is takes ${classhours} hours of classes`);
    }
}

const teacher1=new teacher("Mr.Teacher",25,"Bangladesh","Senior Teacher");
teacher1.takeClass(8);



