let myDate = new Date()
console.log(myDate.toString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 24)
// let myCreatedDate = new Date(2025, 0, 24, 5, 3)
// let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
