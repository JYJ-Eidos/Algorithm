const solution = function (k, m, score) {
  const sortScore = score.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 1; i <= score.length / m; i++) {
    answer += sortScore[i * m - 1] * m;
  }
  return answer;
};