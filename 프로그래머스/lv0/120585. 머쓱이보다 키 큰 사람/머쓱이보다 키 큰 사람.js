const solution = function (array, height) {
  return array.filter((element) => element > height).length;
};
