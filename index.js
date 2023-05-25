const binaryArrayToNumber = (arr) => {
  let arr1 = arr.reverse();
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] * Math.pow(2, i);
  }
  return sum;
};

console.log(binaryArrayToNumber([0, 0, 0, 0, 0]));
