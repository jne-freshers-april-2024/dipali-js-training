//sync
console.log("Start");

// Synchronous blocking operation
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log("End");



//Async
console.log("Start");

// Asynchronous non-blocking operation
setTimeout(function() {
    console.log("Async operation completed");
}, 2000); // Wait for 2 seconds

console.log("End");
