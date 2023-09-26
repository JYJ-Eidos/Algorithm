const solution = (n) => {
  return String(n)
    .split("")
    .reverse()
    .map((value) => Number(value));
};
