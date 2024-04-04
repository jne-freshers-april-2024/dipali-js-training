
//callback
// function fetchData(callback) {
//     // Simulating asynchronous operation
//     setTimeout(function() {
//         const data = "Data from server";
//         callback(data);
//     }, 1000);
// }

// fetchData(function(data) {
//     console.log(data);
// });

//promises
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // Simulating asynchronous operation
//         setTimeout(function() {
//             const data = "Data from server";
//             resolve(data);
//         }, 1000);
//     });
// }
// fetchData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });

//Async/wait
async function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation
        setTimeout(function() {
            const data = "Data from server";
            resolve(data);
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();
