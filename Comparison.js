let a = 10, 
    b = 20; 
console.log(a >= b);  // false
console.log(a == 10);

let f1 = 'apple',
f2 = 'Banana';
let result = f2 < f1;
console.log(result);

let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };
  console.log(apple > 10); // false
  console.log(orange == 20)