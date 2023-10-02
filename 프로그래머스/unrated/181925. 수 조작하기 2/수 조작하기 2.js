const solution = (numLog) => {
  const log = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  let answer = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    answer = answer + log[numLog[i + 1] - numLog[i]];
  }

  return answer;
};