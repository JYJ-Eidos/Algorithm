const solution = (balls, share) => {
  const factorial = (k) => {
    let num = 1;
    for (let i = 1; i <= k; i++) {
      num *= i;
    }
    return num;
  };
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
};
