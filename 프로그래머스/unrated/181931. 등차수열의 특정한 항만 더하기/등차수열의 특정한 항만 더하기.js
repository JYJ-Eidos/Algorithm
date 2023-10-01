const solution = (a, d, included) => {
  let answer = 0;
  Array(included.length)
    .fill(a)
    .forEach((value, index) => {
      if (included[index]) {
        answer += value + d * index;
      }
    });
  return answer;
};
