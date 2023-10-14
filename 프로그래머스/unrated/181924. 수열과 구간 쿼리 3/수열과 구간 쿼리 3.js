const solution = (arr, queries) => {
  let answer = [...arr];
  for (let i = 0; i < queries.length; i++) {
    let copyAnswer = [...answer];
    const idx0 = queries[i][0];
    const idx1 = queries[i][1];
    copyAnswer[idx0] = answer[idx1];
    copyAnswer[idx1] = answer[idx0];
    answer = [...copyAnswer];
  }
  return answer;
};
