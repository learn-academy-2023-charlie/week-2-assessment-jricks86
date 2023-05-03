// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
console.log(cohort.split(""))

// a) Your answer: ['C', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '3']
// b) Verify and explain: .split makes a string an array. Using ("") after .split makes it apply to each item in the string individually.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: the function was missing the return prior to `Hello, ${name}!`

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: .map is taking the same array length and doing something to each element. The output is going to be a number and the number will be multiplied by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: .filter will only look for certain elements inside the array. Those filtered items will be a number where the remainder does not equal 0, so the number will be odd

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: we are logging a value:key pair in an object. Inside of myCodingSkills, we are looking at the languages key then the value at the 0 index

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George, Charlie, 2023
// b) Verify and explain: Charlie replaces name in the object and the other properties stay the same. The output shows the class and each property with the value it is defined as.
// Learn { student: 'George', cohort: 'Charlie', year: 2023 }
