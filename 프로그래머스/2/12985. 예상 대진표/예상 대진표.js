const solution = (n, a, b) => {
  let answer = 0;

  if (a > b) {
    while (!(a % 2 === 0 && a - 1 === b)) {
      a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
      b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
      answer++;
    }
  } else {
    while (!(b % 2 === 0 && b - 1 === a)) {
      a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
      b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
      answer++;
    }
  }
  return answer + 1;
};
