const solution = (arr, queries) => {
  const answer = [];
  queries.forEach((el) => {
    const Arr = arr
      .slice(el[0], el[1] + 1)
      .sort((a, b) => a - b)
      .filter((val) => val > el[2]);
    if (Arr.length === 0) {
      answer.push(-1);
    } else {
      answer.push(Arr[0]);
    }
  });

  return answer;
};