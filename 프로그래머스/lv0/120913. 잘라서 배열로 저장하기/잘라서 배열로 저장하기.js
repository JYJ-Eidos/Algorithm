const solution = (my_str, n) => {
  const num = Math.ceil(my_str.length / n);
  const answer = [];
  for (let i = 0; i < num; i++) {
    answer.push(my_str.slice(i * n, (i + 1) * n));
  }
  return answer;
};
