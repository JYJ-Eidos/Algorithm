const solution = (x, n) => {
  return Array(n)
    .fill(x)
    .map((value, index) => value * (index + 1));
};
