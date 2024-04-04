//sync: The async keyword is used to define an asynchronous function. 
//An asynchronous function always returns a promise, even if you don't explicitly return a promise within it

//await: The await keyword can only be used inside an async function. 
//It pauses the execution of the async function until the promise is settled (either resolved or rejected). 
//It then returns the resolved value of the promise, or throws an error if the promise is rejected.

// Function that returns a promise after a delay

//1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Asynchronous function using async/await
  async function asyncFunction() {
    console.log('Start');
    
    // Await the resolution of the promise returned by delay function
    await delay(2000); // Pauses execution for 2 seconds
    
    console.log('After 2 seconds');
    
    // Await another promise
    await delay(1000); // Pauses execution for 1 second
    
    console.log('After another second');
    
    return 'Finished';
  }
  
  // Call the async function
  asyncFunction().then(result => {
    console.log(result); // Output: Finished
  }).catch(error => {
    console.error(error);
  });

///2
  // Function that returns a promise after a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Asynchronous function using async/await
  async function asyncFunction() {
    console.log('Start');
    
    // Await the resolution of the promise returned by delay function
    await delay(2000); // Pauses execution for 2 seconds
    
    console.log('After 2 seconds');
    
    // Await another promise
    await delay(1000); // Pauses execution for 1 second
    
    console.log('After another second');
    
    return 'Finished';
  }
  
  // Call the async function
  asyncFunction().then(result => {
    console.log(result); // Output: Finished
  }).catch(error => {
    console.error(error);
  });
  


  