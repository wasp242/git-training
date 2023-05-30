function tribonacci(arr, n) {
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < i + 3; j++) {
      sum += arr[j];
    }
    arr.push(sum);
  }
  return arr.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
