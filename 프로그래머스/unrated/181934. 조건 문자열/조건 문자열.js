const solution = (ineq, eq, n, m) => {
  let answer;
  if (eq === "!") {
    answer = ineq === ">" ? n > m : n < m;
  } else {
    answer = ineq === ">" ? n >= m : n <= m;
  }

  return answer ? 1 : 0;
};
