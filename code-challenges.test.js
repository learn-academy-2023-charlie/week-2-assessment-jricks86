// ASSESSMENT 2: Coding Practical Questions with Jest

const { log } = require("console")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
// input: object
// output: String that identifies if the given number is divisible by three.
// "15 is divisible by three"
// "0 is divisible by three"
// "-7 is not divisible by three"
// create function div3
// use if else conditional distinguish between if it is divisible or not

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("div3", () => {
    it("returns if the number inside it is evenly divisible by three or not", () => {
        expect(div3(object1)).toEqual("15 is divisible by three")
        expect(div3(object2)).toEqual("0 is divisible by three")
        expect(div3(object3)).toEqual("-7 is not divisible by three")
        
    })
})
//  FAIL  ./code-challenges.test.js
//   div3
//   ✕ returns if the number inside it is evenly divisible by three or not
// ● div3 › returns if the number inside it is evenly divisible by three or not
//   ReferenceError: div3 is not defined

// b) Create the function that makes the test pass.

const div3 = (object) => {
    if(object % 3 ===0) {
        return `${object.number} is divisible by three`}
    else {
        return `${object.number} is not divisible by three`
    }
    }



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
// input: array
// output: array with all words capitalized
// create a function called makeUppercase
// iterate through the array using .map to return the same array length
// use .slice to make the first letter of each word capitalized in addition to .toUpperCase

// a) Create a test with expect statements for each of the variables provided.

describe("makeUppercase", () => {
    it("return an array with all the words capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//     // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//     // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

    expect(makeUpercase(randomNouns1).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]))
    expect(makeUpercase(randomNouns1).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]))
    })
})
// FAIL  ./code-challenges.test.js
// makeUppercase
//   ✕ return an array with all the words capitalized (1 ms)
// ● makeUppercase › return an array with all the words capitalized
//   ReferenceError: makeUpercase is not defined

// b) Create the function that makes the test pass.

const makeUppercase = (words) => {
    return words.map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
}

//  PASS  ./code-challenges.test.js
//   makeUppercase
//   ✓ return an array with all the words capitalized (1 ms)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:
// input: string
// output: index of the first vowel
// create a function firstVowel
// use for loop to iterate through the string and .includes to only look for the vowels
// use [i] with the given strings to output index numbers instead of the values

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2        
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})
// FAIL  ./code-challenges.test.js
// makeUppercase
//   ✓ return an array with all the words capitalized (1 ms)
// firstVowel
//   ✕ logs the index of the first vowel
// ● firstVowel › logs the index of the first vowel
//   ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.
const vowels = ["a","e", "i", "o", "u"]
const firstVowel = (string) => {
    for (let i=0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            return i
        }
    }
}
// PASS  ./code-challenges.test.js
// makeUppercase
//   ✓ return an array with all the words capitalized (1 ms)
// firstVowel
//   ✓ logs the index of the first vowel (1 ms)