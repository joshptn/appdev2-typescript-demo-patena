// Special Type - null
let a: null;

a = null

// a = 0 error type null
// a = "Hi" error type null

let b: null | string

b = null
b = "Hi"

// b = true error, a boolean
// b = 10 error, a number

// Special Type - undefined
let c: undefined;

c = undefined
// c = null error, a null
// c = "Hi" error, a string
// c = true error, a boolean
// c = 5 error, a number

let d: undefined | string 

d = undefined
d = "Hi" 

// d = true error, a bolean
// d = null error, a null
// d = 10 error, number 

let e: undefined | string | boolean | number | null

e = undefined
e = "Hi" 
e = true 
e = null 
e = 10 
