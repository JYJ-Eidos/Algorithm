const solution = (n) => {
  const arr = [];
  let i = 2;
  while (n !== 1) {
    if (n % i === 0) {
      arr.push(i);
      n /= i;
    } else {
      i++;
    }
  }
  const answer = new Set(arr);
  return [...answer];
};
