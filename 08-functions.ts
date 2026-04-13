(() => {

    // Function Return Value Types
    function minus(a: number, b: number):number { // you can omit the function type since typescript can infers it
        return a - b
    }

    console.log(minus(5, 10));
    // add("5", 10)

    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message: string): void {
        console.log(message)
    }

    log("Hello, World!")

    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage)
        throw new Error(errorMessage)
    }


    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb: (m: number) => void) {  // you can also use cb: Function but () => void is the best practice
        // ...
        // cb('Job Done!') error not a number
        cb(4) // not error, a number
    }

    let logNumber = (number: number): void => {
        console.log(logNumber)
    }

    performJob(logNumber)

    // Useful for objects and methods
    type User = {
        name: string;
        age: number;
        role: string
        greet: () => string;
    }

    let user: User = {
        name: "Joshua",
        age: 23,
        role: 'student',
        // greet: function() {
        //   return this.name
        //  }
        greet: function() {
            console.log(`Hello, ${this.name}`)
            return this.name
        }
    }

    console.log(user.greet());
})