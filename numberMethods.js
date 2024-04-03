let x = 123;
console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

let y = 9.656;
console.log(y.toExponential(2));
console.log(y.toExponential(4));

let z = 9.656;
console.log(z.toFixed(0));
console.log(z.toFixed(2));

let p=9.655;
console.log(p.toPrecision())
console.log(p.toPrecision(2))
console.log(p.toPrecision(4))

let q=123;
console.log(q.valueOf());
console.log((123).valueOf());
console.log((100+23).valueOf());

console.log(Number(true));
console.log("10");
console.log(" 10");
console.log(10);

console.log(Number(new Date("2024-02-04")) )

console.log(parseInt(10.09));
