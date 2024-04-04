
let myMap = new Map();
myMap.set('name', 'Sayali');
myMap.set('age', '25');
myMap.set('job', 'Developer')

console.log(myMap.get('name'));
console.log(myMap.get('age'));

console.log(myMap.size); 

//
let keysIterator = myMap.keys();
for (let key of keysIterator) {
    console.log(key);
}

//
let valuesIterator = myMap.values();
for (let value of valuesIterator) {
    console.log(value);
}

//
const entriesIterator = myMap.entries();
for (let [key, value] of entriesIterator) {
    console.log(`${key} = ${value}`);
}





