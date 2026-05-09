"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role == 'admin')
        return 'Admin Dashboard';
    else if (role == 'user')
        return 'User Dashboard';
    else
        return 'Guest Dashboard';
};
getDashboard('user');
const ChowdhuryShaheb = {
    id: "123",
    name: "ChowdhuryShaheb",
    phoneNo: "017",
    designation: "manager",
    teamSize: 28
};
//# sourceMappingURL=UnionAndIntersection.js.map