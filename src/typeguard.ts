// typeof - guard

type AlphaNumeric= number | string

const add=(num1:AlphaNumeric,num2:AlphaNumeric)=>{
    if(typeof num1==="number" && typeof num2==="number"){
        return num1+num2;
    }
    else{
        return num1.toString()+num2.toString();
    }
}

add(2,2);
add('2',2);
add(2,'2');
add('2','2');


//in - guard

type NormalUser={
    name:string
}

type AdminUser={
    name:string,
    role:"Admin"
}

const getUserInfo=(user:NormalUser | AdminUser)=>{
    if("role" in user){
        console.log(`This is ${user.name} and his/her role is ${user.role}`);
    }
}

getUserInfo({name:"Maisha",role:"Admin"});

