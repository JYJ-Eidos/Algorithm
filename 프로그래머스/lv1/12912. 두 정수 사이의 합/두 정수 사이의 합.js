const solution = (a, b) => {
  const absolute = Math.abs(a - b) + 1;
  return ((a + b) * absolute) / 2;
};
