let x = 20,
  y = 10;

let result = add(x, y); 
console.log(result); // 👉 30

function add(a, b) {
  return a + b;
}

// let a = 20,
//     b = 10;

// let res = sub(x,y); 
// console.log(res);

// let sub = function(x, y) {
//     return x - y;
// }

//variable hoisting 
console.log(p);
var p = 5;
console.log(p); 

//function hoisting
greet(); 
function greet() {
  console.log("Hello, world!");
}

//let and const hoisting
// console.log(r);
// let r=10;


//
var message = 'Hi';
function say() {
    var message = 'Hello';
    console.log(message);
}

say();
console.log(message);
