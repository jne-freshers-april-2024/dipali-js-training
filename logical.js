let a = false,
    b = true;

console.log(!a);
console.log(!b);

let c=true;
let d=false;
console.log(c&&d);

c=true;
d=true;
console.log(c&&d);

console.log(c||d);

d=false;
console.log(c||d);

c=false;
console.log(c||d);

let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};

person.lastName &&= 'Smith';

console.log(person);