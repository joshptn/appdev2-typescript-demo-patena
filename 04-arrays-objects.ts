let myHobbies: string[] = ["Cycling", "Running"]

myHobbies.push("Sleeping")

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Joshaua", "Joshua456", 789]

console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Joshua",
    age: 22,
    hobbies: ["Cycling", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
}

console.log (user)

// Must not null or undefined
let val: any = "Joshua Patena"
val = null  
val = undefined

console.log(val)

// Flexible Object - Record Type
let data: Record<string, number | string | boolean>

data = {
    1: 1,
    name: 'joshua',
    isPartTimeStudent: true
}

console.log(data)