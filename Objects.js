let a={};
console.log(a);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person);

let company={
    Name: 'Thinkitive',
    field: 'Information Technology'
};
console.log(company['Name']);
console.log(company['field']);

//checking properties is exist or not
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('salary' in employee);
console.log('firstName' in employee);

//nested objects
const student = {
    name: 'Sayali',
    details: {
      age: 25,
      grade: 'A'
    }
  };
console.log(student.details.age);  
console.log(student.name);

//
const car = {
    brand: 'Thar',
    year: 2020,
    start: function() {
      console.log('Car started');
    }
  };
  
car.start(); 

//

console.log(Object.keys(person)); 
console.log(Object.values(person)); 
console.log(Object.entries(person));  

console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));

//

function Person(name, age) {
    this.name = name;
    this.age = age;
}
person1 = new Person('Dipali', 24);
console.log(person1);

  


  