const solution = (n) => {
  let count = 1;
  let i = 1;
  while (i <= n) {
    count++;
    i *= count;
  }
  return count - 1;
};