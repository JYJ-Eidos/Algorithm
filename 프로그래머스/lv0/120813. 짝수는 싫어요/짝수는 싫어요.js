const solution = function (n) {
  let answer = new Array(n)
    .fill(1)
    .map((value, index) => value + index)
    .filter((value) => value % 2 === 1);

  return answer;
};
