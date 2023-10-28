const solution = (n) => {
  const transNumber = n.toString(3);
  let answer = 0;
  for (let i = 0; i < transNumber.length; i++) {
    answer += transNumber[i] * 3 ** i;
  }
  return answer;
};