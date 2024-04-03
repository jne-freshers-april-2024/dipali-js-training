for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }

  //comma operator
  let result = (10, 10 + 20);
console.log(result);