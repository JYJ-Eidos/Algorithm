const solution = (array, n) => {
  let answer = Infinity;
  array.forEach((element) => {
    if (Math.abs(n - answer) === Math.abs(n - element)) {
      answer = answer > element ? element : answer;
    } else if (Math.abs(n - answer) > Math.abs(n - element)) {
      answer = element;
    }
  });
  return answer;
};
