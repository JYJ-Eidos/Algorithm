const solution = function (arr, k) {
  if (k % 2) {
    return arr.map((element) => element * k);
  } else {
    return arr.map((element) => element + k);
  }
};
