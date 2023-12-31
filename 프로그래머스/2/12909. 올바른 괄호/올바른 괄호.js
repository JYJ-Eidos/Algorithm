const solution = (s) => {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      answer++;
    } else {
      answer--;
    }
    if (answer === -1) {
      return false;
    }
  }
  return answer === 0;
};
