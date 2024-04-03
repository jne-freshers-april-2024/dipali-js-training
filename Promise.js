// function getUsers() {
//     return [
//       { username: 'abc', email: 'abc@gmail.com' },
//       { username: 'pqr', email: 'pqr@gmail.com' },
//       { username: "xyz", email: 'xyz@gmail.com'}
//     ];
//   }
  
//   function findUser(username) {
//     const users = getUsers(); 
//     const user = users.find((user) => user.username === username);
//     return user;
//   }
  
//   console.log(findUser('xyz'));
  


// function findUser(email)
// {
//     user=getUsers();
//     u=user.find((u) => u.email === email);
//     return user;
// }

// console.log(findUser("abc@gmail.com"));


// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        num= 15;
        if (num > 0) {
            resolve(num); // Resolve the promise with the random number if it's greater than 0.5
        } else {
            reject('Random number is too low'); // Reject the promise if the random number is not greater than 0.5
        }
    }, 1000); 
});

// Consuming the promise
myPromise
    .then((result) => {
        console.log('Promise resolved with number:', result);
    })
    .catch((error) => {
        console.error('Promise rejected with error:', error);
    });


    let p=new Promise((resolve, reject) => {
        let a=1+2;
        if(a==3)
        resolve('success')
        else
        reject('failed')
    })
    
    p.then((message)=>
    {
        console.log("This is in the then "+message);
    }).catch((message)=>
    {
        console.log("This is in the catch "+message);
    })








