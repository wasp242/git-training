function rowSumOddNumbers(n) {
  let num = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = 1; j <= i + 1; j++) {
      if (i != 0) {
        num = num + 2;
        sum = sum + num;
      } else {
        sum = 1;
      }
    }
  }
  return sum;
}

console.log(rowSumOddNumbers(42));
