const solution = function (array, height) {
  return array
    .concat([height])
    .sort((a, b) => b - a)
    .findIndex((element) => element === height);
};
