const solution = (s) => {
  const splitArr = s.split(" ");
  let answer = 0;
  splitArr.reduce(
    (acc, cur, index) =>
      Number.isNaN(Number(cur))
        ? acc + (answer -= Number(splitArr[index - 1]))
        : acc + (answer += Number(splitArr[index])),
    0
  );
  return answer;
};
