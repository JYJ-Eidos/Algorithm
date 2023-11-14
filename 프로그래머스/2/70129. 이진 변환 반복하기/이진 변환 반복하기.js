const solution = (s) => {
  const answer = [0, 0];
  while (s !== "1") {
    const beforeLength = s.length;
    const afterLength = s.split("").filter((el) => el === "1").length;
    s = s
      .split("")
      .filter((el) => el === "1")
      .length.toString(2);

    answer[0] += 1;
    answer[1] += beforeLength - afterLength;
  }

  return answer;
};