const myArray = [0,1,2,3,4,5,6]

// console.log(myArray[0]);
myArray.push(7)
// console.log(myArray);
myArray.pop()
myArray.unshift(8)
myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

// console.log(myArray);

const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr)

// console.log("A ",myArray);
const myn1 = myArray.slice(1,3)
// console.log(myn1);
// console.log("B",myArray);

// console.log("c ",myArray);
const myn2 = myArray.splice(1,3)
// console.log(myn2);
// console.log("D",myArray);

// splice manipulate the original array and include the whole range where as slice don't manipulate the original array and not include last range.

const marvel_heroes =  ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// const hero = marvel_heroes.concat(dc_heroes)
// console.log(hero);

const all_hero = [...marvel_heroes,...dc_heroes]
console.log(all_hero);

const another_array = [1,2,3,[4,5,6],7,[8,9,[7,8]]]
const array = another_array.flat(Infinity)
console.log(array);

console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"))
console.log(Array.from({name:"Aman"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));




