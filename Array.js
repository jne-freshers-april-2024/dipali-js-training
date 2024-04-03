let a=[10,30,40];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
a.push(60);
console.log(a);

console.log(a.length);
console.log(a.toString());

// let b=a.at(2);
// console.log(b);

a.pop();
console.log(a);

let b=["Maths","Comp","Mar"];
let c=["His","Geo"];
let d=b.concat(c);
console.log(d);

console.log(a.copyWithin(2, 0)); 