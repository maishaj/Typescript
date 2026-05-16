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

    private addBalance(balance:number){
        return this.userBalance=this.userBalance+balance;
    }

    getHiddenBalance(taka:number){
        this.addBalance(taka);
    }
}

const mezbaBhaiAccount=new BankAccount(111,"Mezba",20,"info");
//mezbaBhaiAccount.userId=112; - Not Possible
//mezbaBhaiAccount.addBalance(100); -Not Possible
console.log(mezbaBhaiAccount);

class Demo extends BankAccount{
    test(){
        this.getHiddenBalance(10);     //this.userBalance cannot be accessed because it is private.
    }
}
