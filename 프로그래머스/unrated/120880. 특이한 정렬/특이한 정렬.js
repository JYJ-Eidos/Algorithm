const solution = (numlist, n) => {
  const arr = numlist.sort((a, b) => a - b).map((num) => num - n);

  return [...arr]
    .sort((a, b) => Math.abs(b) - Math.abs(a))
    .reverse()
    .map((num) => numlist[arr.indexOf(num)]);
};