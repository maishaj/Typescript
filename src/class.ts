//OOP -> class -> object

//Class

// Way 01
/*class Animal{
    name:string
    species:string
    sound:string

    constructor(name:string,species:string,sound:string){
        this.name=name
        this.species=species
        this.sound=sound
    }

    //method
    makeSound(){
        console.log(`${this.name} is making ${this.sound} sound!`);
    }
}*/

// way 02 - Parameter Properties

class Animal{

    constructor(public name:string,public species:string,public sound:string){
    }
    //method
    makeSound(){
        console.log(`${this.name} is making ${this.sound} sound!`);
    }
}


//Object
const dog=new Animal("dogesh bhai","dog","ghew ghew");
console.log(dog.species);

const cat=new Animal("Cat bhai","cat","meaw meaw");
console.log(cat.sound);

cat.makeSound();
dog.makeSound();

