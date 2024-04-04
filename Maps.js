//create map
fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  console.log(fruits);

//set the map entries
 map = new Map();
map.set("apples", 500);
map.set("bananas", 300);
map.set("oranges", 200);
console.log(map);

//get
console.log(map.get("apples"));
console.log(map.get("bananas"));
console.log(map.get("oranges"));

//              
console.log(map.size);
fruits.clear();
console.log(fruits);     


console.log(map.has("apples"));
map.delete("apples");
console.log(map.has("delete"));
console.log(map);

console.log(typeof map);
console.log(map instanceof Map);

map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  //
 
for (let x of map.values()) {
  console.log(x);
}


for (let x of map.keys()) {
  console.log(x);
}

let sum=0;
for(let x of map.values())
sum=sum+x;
console.log(sum);
