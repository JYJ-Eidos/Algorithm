const solution = (arr) => {
  let n = 0;
  while (Math.pow(2, n) < arr.length) {
    n++;
  }

  return [...arr, ...Array(Math.pow(2, n) - arr.length).fill(0)];
};
