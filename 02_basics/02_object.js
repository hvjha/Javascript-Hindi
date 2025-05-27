// obj.create , when we create obj using obj.create then it is called constructor method and constructor method always follow singleton
// object literals
const sym = Symbol("key1")
const user = {
    name:"Harsh",
    "full name" :"Harsh Vardhan Jha",
    [sym]:"mysym",
    age:23,
    location:"Noida",
    email:"ajha@gmail.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user[sym]);

user.email = "jhahv@gmail.com"
// console.log(user.email);

// Object.freeze(user)
// user.email = "harsh@gmail.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello user");
}
user.greeting2 = function(){
    console.log(`Hello user ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());


