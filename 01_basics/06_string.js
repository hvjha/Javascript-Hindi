const name = "Harsh"
const repoCount = 50
console.log(name + repoCount);

// in modernday we use ``(backtick) insted of + for stringinterpulation

// console.log(`Hello My name is ${name} and my repo Count is ${repoCount}`)

const gameName = new String('harsh')
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('r'))

const newString = gameName.substring(0,3) 
console.log(newString)
const anotherString = gameName.slice(0,3)
console.log(anotherString)

const str1 = "    aman    "
console.log(str1);
console.log(str1.trim());

const url = "https://jhahv.com/harsh%20jha"
console.log(url.replace('%20','_'))
