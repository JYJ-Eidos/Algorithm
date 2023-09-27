const solution = (n) => {
  let count = 2;
  while (n % count !== 1) {
    count++;
  }
  return count;
};
