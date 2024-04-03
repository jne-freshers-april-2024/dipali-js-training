//Async and Await
//Async/await is a feature in JavaScript that allows you to work with asynchronous code in a synchronous manner.

async function greet() {
    return "Hello World";
  }
  
  async function example() {
    try {
      const message = await greet();
      console.log("msg is"+message);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  example();
  