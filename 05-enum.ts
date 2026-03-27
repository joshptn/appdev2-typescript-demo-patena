(() => {
    enum Role {
        // SuperAdmin,
        SuperAdmin = 1,
        // Admin,
        Admin = 'Admin',
        // Officer,
        Officer = 'Officer',
        // Member,
        Member = 'Member',
    }

    let userRole: Role = 1;
    // let userRole: Role = Role.SuperAdmin;

    console.log(userRole)
})