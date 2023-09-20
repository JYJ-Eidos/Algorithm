const solution = (a, b) => {
  const aFirst = Number("" + a + b);
  const aSecond = Number("" + b + a);
  return aFirst >= aSecond ? aFirst : aSecond;
};
