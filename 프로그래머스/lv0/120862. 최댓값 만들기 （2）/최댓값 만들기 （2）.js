const solution = (numbers) => {
  const sortArr = numbers.sort((a, b) => a - b);
  const minMultiply = sortArr[0] * sortArr[1];
  const maxMyltiply = sortArr.at(-1) * sortArr.at(-2);
  return minMultiply > maxMyltiply ? minMultiply : maxMyltiply;
};
