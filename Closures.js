//A closure is formed when a function is defined within another function (the outer function) and 
//has access to variables from its outer scope, 
//even after the outer function has finished executing.

let sum=0;
function add(a,b)
{
    sum=a+b;

    function sub(sum,b)
    {
        subtract=sum-b;
    }
  

}

let myClosure=add(10,20);
console.log(myClosure);

//global
function myFunction()
{
    let a=10;
    return a*a;
}
console.log(myFunction());

//
let a=8;
function square()
{
    return a*a;
}
console.log(square());

//
let count=0;
function addition()
{
    count=count+1;
}
addition();
addition();
addition();
console.log(count);

//
let count1=0;
function subtraction()
{
    let count1=0;
    count1=count1+1;
}
subtraction();
subtraction();
subtraction();
console.log(count1);

//A closure is a function having access to the parent scope, 
//even after the parent function has closed.

//closure loop
// for (var index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
// }

for(var i=1;i<=3;i++)
{
    (function(i)
    {
        setTimeout(function()
        {
            console.log('after '+i+' second(s):'+ i);
        },i*1000);
    })(i);
}

/**for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
} */