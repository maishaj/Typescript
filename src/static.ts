class Counter{
    static count:number=0;  //Works on a single memory

    static increment(){
        return Counter.count=Counter.count+1;
    }
    static decrement(){
        return Counter.count=Counter.count-1;
    }
}

// const instance1=new Counter();

console.log(Counter.increment()); //1
console.log(Counter.increment()); //2
console.log(Counter.increment()); //3

// const instance2=new Counter(); 

console.log(Counter.increment()); //4
console.log(Counter.increment()); //5