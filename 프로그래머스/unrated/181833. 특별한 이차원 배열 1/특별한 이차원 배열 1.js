const solution = (n) => {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let baseArray = Array(n).fill(0);
    baseArray[i] = 1;
    answer.push(baseArray);
  }
  return answer;
};
