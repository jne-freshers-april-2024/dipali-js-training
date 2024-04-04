//callback hell
function sumNumbers(num1, num2, num3, callback) {
    
    setTimeout(function() {
        const sum = num1 + num2 + num3;
        callback(sum);
    }, 1000);
}

sumNumbers(1, 2, 3, function(result1) {
    console.log("Result from sumNumbers:", result1);

    sumNumbers(result1, 4, 5, function(result2) {
        console.log("Result from sumNumbers:", result2);

        sumNumbers(result1, result2, 6, function(result3) {
            console.log("Final Result:", result3);
        });
    });
});

//
setTimeout(function() {
    console.log("Task 1 completed");
    setTimeout(function() {
        console.log("Task 2 completed");
        setTimeout(function() {
            console.log("Task 3 completed");
        }, 1000);
    }, 1000);
}, 1000);
