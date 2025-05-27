// primitive
// String,Boolean,Number,null,undefined,Symbol,BigInt


// Non-Primitive(Reference Type)
// Array
// Function
// Object

// ===================Memory================
// Stack(Primitive) Here we get a copy 
// Heap(Non-Primitive) Here we get reference so if we made any changes then it directly affect the original value

let myYouTubeName = "COC"
let anothername = myYouTubeName;
anothername = "chaiorcode"

console.log(anothername)
console.log(myYouTubeName)

let user1 = {
    email:"user@google.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "aman@google.com"
console.log(user1.email)
console.log(user2.email)