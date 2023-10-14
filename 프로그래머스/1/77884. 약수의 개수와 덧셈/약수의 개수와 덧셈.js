const solution = (left, right) => {
  const divisors = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    return count;
  };

  let answer = 0;
  for (let i = left; i <= right; i++) {
    divisors(i) % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
};
