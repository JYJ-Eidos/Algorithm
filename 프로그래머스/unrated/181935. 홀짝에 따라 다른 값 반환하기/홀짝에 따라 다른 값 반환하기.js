const solution = (n) => {
  if (n % 2 === 1) {
    return (Math.ceil(n / 2) * (n + 1)) / 2;
  } else {
    answer = 0;
    for (let i = 2; i <= n; i += 2) {
      answer += i * i;
    }
    return answer;
  }
};

