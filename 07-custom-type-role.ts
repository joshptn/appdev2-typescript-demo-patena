(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type UserRole = 'admin' | 'superadmin' | 'customer'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: UserRole; // you can use as well the userRole type in Object type
        permission: string[];
    }

    let userRole: UserRole = 'admin'

    userRole = 'superadmin'
    // userRole = 'student' error

    function access(role: UserRole) {
        userRole = 'superadmin'
       // userRole = 'principal' error
    }
})