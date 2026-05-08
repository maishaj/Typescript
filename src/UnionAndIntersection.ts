//Union |
type userRole='admin' | 'user'; //Or is a literal type

const getDashboard=(role:userRole)=>{
    if(role=='admin')
        return 'Admin Dashboard';
    else if(role=='user')
        return 'User Dashboard';
    else return 'Guest Dashboard';
}

getDashboard('user');



//Intersection &
type Employee={
    id:string,
    name:string,
    phoneNo:string
}

type Manager={
    designation:string,
    teamSize:number
}

type EmployeeManager= Employee & Manager

const ChowdhuryShaheb:EmployeeManager={
    id:"123",
    name:"ChowdhuryShaheb",
    phoneNo:"017",
    designation:"manager",
    teamSize:28
}


