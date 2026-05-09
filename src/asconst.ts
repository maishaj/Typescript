const UserRoles={
    Admin:"ADMIN",
    Editor:"EDITOR",
    Viewer:"VIEWER",
} as const;


/*
    typeof UserRoles

    {
        Admin:ADMIN,
        Editor:EDITOR,
        Viewer: VIEWER
    }
    
    keyof typeof UserRoles

   "Admin" | "Editor" | "Viewer"

    [keyof typeof UserRoles]

    "ADMIN" | "EDITOR" | "VIEWER"
*/

const canEdit=(role:(typeof UserRoles) [keyof typeof UserRoles])=>{
    if(role===UserRoles.Admin || role===UserRoles.Editor)
        return true;
    else
        return false;
}

const isEditPermissible=canEdit(UserRoles.Admin)
console.log(isEditPermissible);
