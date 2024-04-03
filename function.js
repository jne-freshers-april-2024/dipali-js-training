function add(a,b)
{
    return a+b;
}

console.log(add(10,4));
//console.log(add(40.9+10));


function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2)); 
console.log(add(1, 2, 3, 4, 5)); 


////
function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
  }
  let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 },
  ];
  
  // sort products by name
  console.log('Products sorted by name:');
  products.sort(compareBy('name'));
  
  console.table(products);
  
  // sort products by price
  console.log('Products sorted by price:');
  products.sort(compareBy('price'));
  console.table(products);
  