
//rest api
function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}
let a=sum(1, 2, 3);
console.log(a);

//
var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3);

//spread operator
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);

let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

//copying array
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]

/// Using for...of loop
let array = ['a', 'b', 'c', 'd'];
for (let element of array) {
    console.log(element);
}

//entries()
let arr = ['a', 'b', 'c', 'd'];

// Using for...of loop with entries()
for (let [index, element] of arr.entries()) {
    console.log(`Index: ${index}, Element: ${element}`);
}

const str = 'Hello';
// Using for...of loop with a string
for (const char of str) {
    console.log(char);
}



