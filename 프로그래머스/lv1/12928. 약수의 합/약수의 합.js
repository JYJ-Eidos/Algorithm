const solution = (n) => {
  let count = 1;
  let answer = n;
  if (n === 0) {
    return 0;
  }
  while (n !== count) {
    if (n % count === 0) {
      answer += count;
    }
    count++;
  }
  return answer;
};
