const solution = (arr, queries) => {
  const answer = [...arr];
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      answer[j] += 1;
    }
  }
  return answer;
};
