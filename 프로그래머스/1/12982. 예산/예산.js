const solution = (d, budget) => {
  const arr = [...d].sort((a, b) => a - b);
  let addNum = 0;
  for (let i = 0; i < arr.length; i++) {
    addNum += arr[i];
    if (addNum > budget) {
      return i;
    }
  }
  return d.length;
};