//Example 01
class Person{
    getSleep(){
        console.log("A normal person sleeps 7 hours a day");
    }
}

class Student extends Person{
    getSleep(){
        console.log("A normal person sleeps 10 hours a day");
    }
}

class NextLevelDev extends Person{
    getSleep(){
        console.log("A normal person sleeps 4 hours a day");
    }
}

const getSleepingHours=(param:Person)=>{
    param.getSleep();
}

const person1=new Person();
const person2=new Student();
const person3=new NextLevelDev();

getSleepingHours(person2);


//Example 02
class Shape{
    getArea():number{
        return 0;
    }
}

class Circle extends Shape{

    radius:number;

    constructor(radius:number){
        super();
        this.radius=radius;
    }
    getArea():number{
       return Math.PI*this.radius*this.radius;
    }
}

class Rectangle extends Shape{

    height:number;
    width:number;

    constructor(height:number,width:number){
        super();
        this.height=height;
        this.width=width;
    }

    getArea():number{
        return this.height * this.width;
    }
}


const getArea=(param:Shape)=>{
    console.log(param.getArea());
}

const shape1=new Shape();
const shape2=new Circle(10);
const shape3=new Rectangle(10,10);

getArea(shape2);



