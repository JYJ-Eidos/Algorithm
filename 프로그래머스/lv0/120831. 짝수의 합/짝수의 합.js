let solution = function (n) {
  let answer = 0;
  for (let i = 1; i <= Math.trunc(n / 2); i++) {
    answer += i;
  }
  return 2 * answer;
};