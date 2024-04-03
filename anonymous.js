let person = {
    firstName: 'Abc',
    lastName: 'Def'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

///
let add = (a, b) => a + b;   
console.log(add(10,5));