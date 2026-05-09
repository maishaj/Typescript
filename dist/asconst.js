"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor)
        return true;
    else
        return false;
};
const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
//# sourceMappingURL=asconst.js.map