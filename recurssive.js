function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(5);

//
function sum(n) {
    //console.log(n);
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  }
  sum(5);