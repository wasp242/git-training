integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
values_list = [1, 3];
Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter(
    (item) => !values_list.some((val) => val === item)
  );
};

console.log(integer_list.remove_(integer_list, values_list));
