function isSortedAndHow(arr) {
  const arrAsc = [...arr].sort((a, b) => a - b);
  const arrDesc = [...arr].sort((a, b) => b - a);

  const asc = arr.every((value, index) => value === arrAsc[index]);
  const desc = arr.every((value, index) => value === arrDesc[index]);
  if (asc) {
    return "yes, ascending";
  } else if (desc) {
    return "yes, descending";
  } else {
    return "no";
  }
}

console.log(isSortedAndHow([2, 42, 30]));
