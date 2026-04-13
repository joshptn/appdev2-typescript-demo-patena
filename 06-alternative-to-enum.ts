(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'principal' | 'guest' | 'teacher' | 'student' = 'guest'

    userRole = 'guest' // not error
   // userRole = 'staff' // error

    function access(role: 'principal' | 'guest' | 'teacher' | 'student') {
        role = 'student' // not error
       // role = 'staff' error
    }
    console.log(userRole)
})
