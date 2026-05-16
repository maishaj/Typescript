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

    // Set
    set newBalance(amount:number){
        this.userBalance=this.userBalance+amount;
    }

    // Get
    get getBalance(){
        return this.userBalance;
    }
}

const mezbaBhaiAccount=new BankAccount(111,"Mezba",20,"info");

mezbaBhaiAccount.newBalance=800;  //adding 800 to previous value
console.log(mezbaBhaiAccount);

