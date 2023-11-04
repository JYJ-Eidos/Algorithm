const solution = (my_string, queries) => {
  let answer = my_string.split("");
  for (let i = 0; i < queries.length; i++) {
    const sliceArr = answer.slice(queries[i][0], queries[i][1] + 1).reverse();
    answer.splice(
      queries[i][0],
      queries[i][1] - queries[i][0] + 1,
      ...sliceArr
    );
  }
  return answer.join("");
};
