let obj=null;
console.log(typeof(obj));

let a='hello';
console.log(typeof(a));

a=10;
console.log(typeof(a));

a=true;
console.log(typeof(a));

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact.firstName);
console.log(contact.lastName);