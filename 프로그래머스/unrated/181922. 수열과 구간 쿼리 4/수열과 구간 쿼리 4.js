const solution = (arr, queries) => {
  const answer = [...arr];
  const sprArr = [];
  queries.forEach((element) => {
    sprArr.push(
      ...Array(element[1] - element[0] + 1)
        .fill(element[0])
        .map((value, index) => value + index)
        .filter((value) => value % element[2] === 0)
    );
  });
  sprArr.forEach((element) => (answer[element] += 1));
  return answer;
};
