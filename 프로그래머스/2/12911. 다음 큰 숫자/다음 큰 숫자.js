const solution = (n) => {
  const binary = n.toString(2);
  let answer = n + 1;
  const quantity = (binaryStr) =>
    binaryStr.split("").filter((el) => el === "1").length;

  while (quantity(binary) !== quantity(answer.toString(2))) {
    answer++;
  }

  return answer;
};