class BankAccount{
    readonly userId:number;
    userName:string;
    private userBalance:number;  //Can't be accessed outside BankAccount Class
    protected userInfo:string;

    constructor(userId:number, userName:string,userBalance:number,userInfo:string){
        this.userId=userId;
        this.userName=userName;
        this.userBalance=userBalance;
        this.userInfo=userInfo;
    }

    addBalance(balance:number){
        this.userBalance=this.userBalance+balance;
    }
}

const mezbaBhaiAccount=new BankAccount(111,"Mezba",20,"info");
//mezbaBhaiAccount.userId=112; - Not Possible
mezbaBhaiAccount.addBalance(100);
console.log(mezbaBhaiAccount);

class Demo extends BankAccount{
    test(){
        this.userInfo;     //this.userBalance cannot be accessed because it is private.
    }
}


