//1)***Spread Operator***

//In Array
const schoolFriends=["Pintu","Chintu","Bulbul"];
const collegeFriends=["Mr.Smart","Mr.Very Smart"];
const friends=["Rahim","Karim"];

friends.push(...schoolFriends);
console.log(friends);

//In Object
const user={
    name:"Mezba",
    phoneNo:"01765988989",
}
const otherInfo={
    hobby:"outings",
    favColor:"red"
}

const userInfo={...user,...otherInfo};
console.log(userInfo);


//2)***Rest Operator***
const sendInvite=(...friends:string[])=>{ //Its a rest operator, combining everything into a string array
    // console.log(`Sent Invitation to ${friend1}`);
    // console.log(`Sent Invitation to ${friend2}`);
    // console.log(`Sent Invitation to ${friend3}`);

    friends.forEach((friend:string)=>{
        console.log(`Sent Invitation to ${friend}`);
    })
}
sendInvite("Chintu","Mintu","Pintu");

